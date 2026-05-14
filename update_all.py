import pandas as pd
import json
import os

def convert_excel_to_js(excel_file, js_file, variable_name):
    # Define column names based on the target JS file's expected structure
    column_mappings = {
        "vocabData": ['num', 'en', 'pos', 'ipa', 'vi', 'ex'], # Used by vocabreadingdata.js, vocabspeakingdata.js, readingielts.js
        "vocabList": ['id', 'word', 'type', 'pronunciation', 'meaning', 'example'], # Used by vocabidiomdata.js, vocabphrasalverbdata.js, vocabclass9.js
        "vocabularyList": ['num', 'en', 'pos', 'ipa', 'vi', 'ex'] # Used by thaovocab.js, tramlinhvocab.js
    }
    # Kiểm tra xem file Excel có tồn tại không trước khi đọc
    if not os.path.exists(excel_file):
        print(f"⚠️ Bỏ qua: Không tìm thấy file '{excel_file}'")
        return

    print(f"⏳ Đang xử lý '{excel_file}' -> '{js_file}'...")
    try:
        df = pd.read_excel(excel_file, header=None).fillna("")
        
        first_cell = str(df.iloc[0, 0]).strip().lower()
        if first_cell in ['num', 'id', 'stt']:
            df = df[1:].reset_index(drop=True)
            
        # Determine the correct column names for the current task
        col_names = column_mappings.get(variable_name, ['num', 'en', 'pos', 'ipa', 'vi', 'ex'])

        # Apply robust column renaming and adding/dropping logic
        temp_df = pd.DataFrame(columns=col_names)
        for i, col_name in enumerate(col_names):
            if i < df.shape[1]:
                temp_df[col_name] = df.iloc[:, i]
            else:
                temp_df[col_name] = "" # Add missing columns as empty
        df = temp_df.copy() # Use the new DataFrame with correct columns and names
        
        # Ensure 'id' or 'num' column is integer
        id_col_name = 'id' if 'id' in col_names else 'num'
        if id_col_name in df.columns:
            df[id_col_name] = pd.to_numeric(df[id_col_name], errors='coerce').fillna(0).astype(int)

            
        vocab_list = df.to_dict(orient='records')
        
        with open(js_file, 'w', encoding='utf-8') as f:
            f.write(f'const {variable_name} = ')
            json.dump(vocab_list, f, ensure_ascii=False, indent=4)
            f.write(';\n')
            
        print(f"✅ THÀNH CÔNG: Đã cập nhật {len(vocab_list)} từ vựng.\n")
    except Exception as e:
        print(f"❌ LỖI khi xử lý '{excel_file}': {e}\n")

if __name__ == "__main__":
    # --- ⚙️ CẤU HÌNH DANH SÁCH FILE TẠI ĐÂY ---
    tasks = [
        {"excel": "tu_vung_reading.xlsx", "js": "vocabreadingdata.js", "var": "vocabData"},
        {"excel": "tu_vung_thao.xlsx", "js": "thaovocab.js", "var": "vocabularyList"},
        {"excel": "tu_vung_tramlinh.xlsx", "js": "tramlinhvocab.js", "var": "vocabularyList"},
        {"excel": "tu_vung_speaking.xlsx", "js": "vocabspeakingdata.js", "var": "vocabData"},
        {"excel": "tu_vung_idiom.xlsx", "js": "vocabidiomdata.js", "var": "vocabList"}, # Corrected variable name
        {"excel": "tu_vung_phrasalverb.xlsx", "js": "vocabphrasalverbdata.js", "var": "vocabList"}, # Corrected variable name
        {"excel": "tu_vung_class9.xlsx", "js": "vocabclass9.js", "var": "vocabList"},
        {"excel": "tu_vung_readingielts.xlsx", "js": "readingielts.js", "var": "vocabData"}
    ]
    
    print("🚀 BẮT ĐẦU CẬP NHẬT TẤT CẢ TỪ VỰNG...\n" + "-"*45)
    for task in tasks:
        convert_excel_to_js(task["excel"], task["js"], task["var"])
    print("-"*45 + "\n🎉 ĐÃ HOÀN TẤT!")

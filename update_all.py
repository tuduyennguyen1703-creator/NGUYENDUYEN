import pandas as pd
import json
import os

def convert_excel_to_js(excel_file, js_file, variable_name):
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
            
        col_names = ['num', 'en', 'pos', 'ipa', 'vi', 'ex']
        df.columns = col_names[:len(df.columns)]
        for col in col_names:
            if col not in df.columns:
                df[col] = ""
                
        if 'num' in df.columns:
            df['num'] = pd.to_numeric(df['num'], errors='coerce').fillna(0).astype(int)
            
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
        {"excel": "tu_vung_idiom.xlsx", "js": "vocabidiomdata.js", "var": "vocabData"},
        {"excel": "tu_vung_phrasalverb.xlsx", "js": "vocabphrasalverbdata.js", "var": "vocabData"},
        {"excel": "tu_vung_class9.xlsx", "js": "vocabclass9.js", "var": "vocabList"},
        {"excel": "tu_vung_readingielts.xlsx", "js": "readingielts.js", "var": "vocabData"}
    ]
    
    print("🚀 BẮT ĐẦU CẬP NHẬT TẤT CẢ TỪ VỰNG...\n" + "-"*45)
    for task in tasks:
        convert_excel_to_js(task["excel"], task["js"], task["var"])
    print("-"*45 + "\n🎉 ĐÃ HOÀN TẤT!")

import pandas as pd
import json
import os

def update_idiom_js(excel_file, js_file):
    print(f"⏳ Đang đọc dữ liệu từ '{excel_file}'...")
    
    if not os.path.exists(excel_file):
        print(f"❌ LỖI: Không tìm thấy file Excel '{excel_file}'. Vui lòng kiểm tra lại đường dẫn và tên file.")
        return

    try:
        df = pd.read_excel(excel_file, header=None).fillna("")
        
        if df.empty:
            print(f"⚠️ CẢNH BÁO: File Excel '{excel_file}' trống. Không có dữ liệu để cập nhật.")
            return

        first_cell_value = str(df.iloc[0, 0]).strip().lower()
        if first_cell_value in ['num', 'id', 'stt']:
            df = df[1:].reset_index(drop=True)
            
        col_names = ['id', 'word', 'type', 'pronunciation', 'meaning', 'example']
        
        temp_df = pd.DataFrame(columns=col_names)
        for i, col_name in enumerate(col_names):
            if i < df.shape[1]:
                temp_df[col_name] = df.iloc[:, i]
            else:
                temp_df[col_name] = ""
        df = temp_df.copy()

        if 'id' in df.columns:
            df['id'] = pd.to_numeric(df['id'], errors='coerce').fillna(0).astype(int)
            
        vocab_list = df.to_dict(orient='records')
        
        with open(js_file, 'w', encoding='utf-8') as f:
            f.write('const vocabList = ')
            json.dump(vocab_list, f, ensure_ascii=False, indent=4)
            f.write(';\n')
            
        print(f"✅ THÀNH CÔNG! Đã cập nhật {len(vocab_list)} từ vựng vào '{js_file}'.")
    except pd.errors.EmptyDataError:
        print(f"⚠️ CẢNH BÁO: File Excel '{excel_file}' trống. Không có dữ liệu để cập nhật.")
    except Exception as e:
        print(f"❌ LỖI khi xử lý file '{excel_file}': {e}")

if __name__ == "__main__":
    # Chạy hàm với tên file tương ứng
    update_idiom_js('tu_vung_idiom.xlsx', 'vocabidiomdata.js')
import pandas as pd
import json
import os

def update_ngan_vocab_js(excel_file, js_file):
    print(f"⏳ Đang đọc dữ liệu từ '{excel_file}'...")
    
    if not os.path.exists(excel_file):
        print(f"❌ LỖI: Không tìm thấy file Excel '{excel_file}'. Vui lòng kiểm tra lại đường dẫn và tên file.")
        return

    try:
        # Đọc file Excel. Giả định hàng đầu tiên là tiêu đề nếu nó chứa 'num', 'id', hoặc 'stt'.
        df = pd.read_excel(excel_file, header=None).fillna("")
        
        if df.empty:
            print(f"⚠️ CẢNH BÁO: File Excel '{excel_file}' trống. Không có dữ liệu để cập nhật.")
            return

        # Kiểm tra nếu hàng đầu tiên có vẻ là tiêu đề và bỏ qua nếu có
        first_cell_value = str(df.iloc[0, 0]).strip().lower()
        if first_cell_value in ['num', 'id', 'stt']:
            df = df[1:].reset_index(drop=True)
            
        # Định nghĩa tên cột dự kiến cho các đối tượng trong mảng JavaScript
        col_names = ['num', 'en', 'pos', 'ipa', 'vi', 'ex']
        
        # Tạo một DataFrame tạm thời để đảm bảo ánh xạ cột chính xác và xử lý các cột bị thiếu
        temp_df = pd.DataFrame(columns=col_names)
        for i, col_name in enumerate(col_names):
            if i < df.shape[1]:
                temp_df[col_name] = df.iloc[:, i]
            else:
                temp_df[col_name] = "" # Gán chuỗi rỗng nếu Excel có ít cột hơn
        df = temp_df.copy()

        # Chuyển đổi cột 'num' sang số nguyên, ép kiểu lỗi thành NaN và sau đó điền 0 trước khi chuyển đổi sang int
        if 'num' in df.columns:
            df['num'] = pd.to_numeric(df['num'], errors='coerce').fillna(0).astype(int)
            
        # Chuyển đổi DataFrame thành một danh sách các từ điển
        vocab_list = df.to_dict(orient='records')
        
        # Ghi dữ liệu vào file JavaScript
        with open(js_file, 'w', encoding='utf-8') as f:
            f.write('const vocabularyList = ') # Sử dụng 'vocabularyList' tương tự như tramlinhvocab.js
            json.dump(vocab_list, f, ensure_ascii=False, indent=4)
            f.write(';\n')
            
        print(f"✅ THÀNH CÔNG! Đã cập nhật {len(vocab_list)} từ vựng vào '{js_file}'.")
    except pd.errors.EmptyDataError:
        print(f"⚠️ CẢNH BÁO: File Excel '{excel_file}' trống. Không có dữ liệu để cập nhật.")
    except Exception as e:
        print(f"❌ LỖI khi xử lý file '{excel_file}': {e}")

if __name__ == "__main__":
    # Chỉ định file Excel và file JavaScript đích
    excel_source = 'tu_vung_ngan.xlsx'
    js_target = 'nganvocab.js'
    
    # Chạy hàm cập nhật
    update_ngan_vocab_js(excel_source, js_target)
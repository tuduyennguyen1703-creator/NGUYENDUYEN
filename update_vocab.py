import pandas as pd
import json

def update_vocab_js(excel_file, js_file):
    print(f"⏳ Đang đọc dữ liệu từ '{excel_file}'...")
    # Đọc file Excel, ép không lấy dòng đầu làm tiêu đề nếu đó là dữ liệu
    df = pd.read_excel(excel_file, header=None).fillna("")
    
    # Kiểm tra xem dòng đầu có thực sự là tiêu đề không (như 'num', 'id')
    first_cell = str(df.iloc[0, 0]).strip().lower()
    if first_cell in ['num', 'id', 'stt']:
        df = df[1:].reset_index(drop=True)
        
    # Gán lại tên cột cho chuẩn xác với thứ tự Excel của bạn
    col_names = ['num', 'en', 'pos', 'ipa', 'vi', 'ex']
    df.columns = col_names[:len(df.columns)]
    for col in col_names:
        if col not in df.columns:
            df[col] = ""
            
    # Đảm bảo cột 'num' luôn là số nguyên
    if 'num' in df.columns:
        df['num'] = pd.to_numeric(df['num'], errors='coerce').fillna(0).astype(int)
        
    # Chuyển đổi bảng dữ liệu thành danh sách các dictionary
    vocab_list = df.to_dict(orient='records')
    
    # Ghi đè cấu trúc chuẩn vào file vocabreadingdata.js
    with open(js_file, 'w', encoding='utf-8') as f:
        f.write('const vocabData = ')
        json.dump(vocab_list, f, ensure_ascii=False, indent=4)
        f.write(';\n')
        
    print(f"✅ THÀNH CÔNG! Đã cập nhật {len(vocab_list)} từ vựng vào '{js_file}'.")

if __name__ == "__main__":
    # Chạy hàm với tên file tương ứng
    update_vocab_js('tu_vung_reading.xlsx', 'vocabreadingdata.js')
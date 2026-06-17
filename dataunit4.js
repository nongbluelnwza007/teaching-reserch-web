window.courseContentUnit4 = [
    { 
        title: "4.1 การเตรียมความพร้อมและสภาพแวดล้อม", 
        content: `<h1>4.1 การเตรียมความพร้อมและสภาพแวดล้อม</h1>
                  <p><strong>พื้นที่ทำงาน :</strong> ต้องเป็นโต๊ะที่มั่นคง พื้นผิวไม่นำไฟฟ้า หากไม่มีแผ่นรองป้องกันไฟฟ้าสถิต (ESD Mat) ให้ใช้กล่องเมนบอร์ดเป็นฐานรองแทน ห้ามประกอบบนพรมหรือพื้นที่ที่เกิดไฟฟ้าสถิตได้ง่าย</p>
                  <p><strong>เครื่องมือ :</strong> ไขควงแฉกขนาดมาตรฐาน (PH2) ที่มีปลายแม่เหล็กจะช่วยป้องกันน็อตหล่นไปช็อตเมนบอร์ดได้ดีที่สุด</p>
                  <p><strong>การจัดการไฟฟ้าสถิต :</strong> ก่อนหยิบจับอุปกรณ์ ให้แตะที่โครงเหล็กของเคสคอมพิวเตอร์เพื่อคายประจุออกจากร่างกายเสมอ</p>
                  <div style="display: flex; justify-content: space-between; gap: 15px; margin: 25px auto; max-width: 900px;">
                    <img src="images/41.png" style="width: 32%; border-radius: 20px; border: 4px solid #ffffff; box-shadow: 0 10px 20px rgba(0,0,0,0.15);">
                    <img src="images/42.png" style="width: 32%; border-radius: 20px; border: 4px solid #ffffff; box-shadow: 0 10px 20px rgba(0,0,0,0.15);">
                    <img src="images/43.png" style="width: 32%; border-radius: 20px; border: 4px solid #ffffff; box-shadow: 0 10px 20px rgba(0,0,0,0.15);">
                  </div>` 
    },
    { 
        title: "4.2 การติดตั้ง CPU และชุดระบายความร้อน", 
        content: `<h1>4.2 การติดตั้ง CPU และชุดระบายความร้อน</h1>
                  <p><strong>CPU :</strong> ปลดล็อก Socket ให้สังเกต "สัญลักษณ์สามเหลี่ยม" ที่มุม CPU ให้ตรงกับสามเหลี่ยมบน Socket เมื่อวางลงไปแล้วห้ามใช้แรงกด ถ้ามันลงล็อกพอดี CPU จะวางตัวเสมอกับ Socket เอง</p>
                  <p><strong>Thermal Paste :</strong> การทาซิลิโคนสำคัญมาก ถ้าทาหนาไปความร้อนจะอมอยู่ข้างใน ถ้าทาบางไปก็ระบายไม่ออก วิธีที่แนะนำคือแต้มขนาดเท่าเมล็ดถั่วเขียวไว้ตรงกลาง แล้วกดชุดระบายความร้อนลงไป ความดันจะกระจายซิลิโคนให้ทั่วเอง</p>
                  <img src="images/cpu_in.png" alt="cpu_in" style="width:100%; max-width:500px; display:block; margin:25px auto; border-radius:25px; border:4px solid #ffffff; box-shadow:0 10px 20px rgba(0,0,0,0.15);">` 
    },             
    { 
        title: "4.3 การติดตั้งแผงหน่วยความจำ (RAM)", 
        content: `<h1>4.3 การติดตั้งแผงหน่วยความจำ (RAM)</h1>
                  <p><strong>Channel Slot :</strong> การใส่ RAM ต้องดูสีหรือเลขช่องตามคู่มือเมนบอร์ด เพื่อให้ระบบทำงานแบบ Dual Channel</p>
                  <p><strong>Pressure :</strong> การเสียบ RAM ต้องใช้แรงกดพอสมควรจนตัวล็อกที่ปลายสล็อตดีดกลับมาล็อกตัว RAM อัตโนมัติ (เสียงคลิกต้องดังทั้งสองฝั่ง)</p>
                  <img src="images/ram_in.png" alt="ram_in" style="width:100%; max-width:500px; display:block; margin:25px auto; border-radius:25px; border:4px solid #ffffff; box-shadow:0 10px 20px rgba(0,0,0,0.15);">` 
    },
    { 
        title: "4.4 การติดตั้งเมนบอร์ดลงในเคส", 
        content: `<h1>4.4 การติดตั้งเมนบอร์ดลงในเคส (Mainboard Mounting)</h1>
                  <p><strong>I/O Shield :</strong> เป็นแผ่นเหล็กปิดช่องพอร์ตด้านหลัง อย่าลืมติดตั้งก่อนวางเมนบอร์ดลงเคสเด็ดขาด</p>
                  <p><strong>Standoffs :</strong> คือหมุดรองที่ต้องขันเข้ากับตัวเคสก่อนวางเมนบอร์ด เพื่อป้องกันลายวงจรหลังเมนบอร์ดช็อตกับตัวเคสโลหะ</p>
                  <img src="images/main_in.png" alt="main_in" style="width:100%; max-width:500px; display:block; margin:25px auto; border-radius:25px; border:4px solid #ffffff; box-shadow:0 10px 20px rgba(0,0,0,0.15);">` 
    },
    { 
        title: "4.5 การต่อสายสัญญาณและไฟเลี้ยง", 
        content: `<h1>4.5 การต่อสายสัญญาณและไฟเลี้ยง (Cable Logic)</h1>
                  <p><strong>Front Panel :</strong> สาย Power/Reset/HDD LED เหล่านี้คือจุดที่ซับซ้อนที่สุด ต้องอ่านคู่มือเมนบอร์ดดูแผนผังขา (Pin Layout) ให้ชัดเจน</p>
                  <p><strong>Power Cables :</strong> สายไฟเลี้ยง CPU (8-pin) และสายหลัก (24-pin) ต้องเสียบให้แน่นจนได้ยินเสียงล็อก ถ้าเสียบไม่แน่นอาจเกิดความร้อนจนขั้วละลายได้</p>
                  <img src="images/front_in.png" alt="front_in" style="width:100%; max-width:500px; display:block; margin:25px auto; border-radius:25px; border:4px solid #ffffff; box-shadow:0 10px 20px rgba(0,0,0,0.15);">` 
    },
    { 
        title: "4.6 การติดตั้งอุปกรณ์จัดเก็บข้อมูล", 
        content: `<h1>4.6 การติดตั้งอุปกรณ์จัดเก็บข้อมูล (Storage)</h1>
                  <p><strong>NVMe SSD :</strong> หากเมนบอร์ดมีพอร์ต M.2 ให้สอดการ์ดเข้าไปในมุมเอียงประมาณ 30 องศา แล้วกดลงเพื่อขันน็อตล็อก</p>
                  <p><strong>SATA HDD/SSD :</strong> การติดตั้งในถาด (Drive Bay) ต้องขันน็อตยึดให้แน่นเพื่อป้องกันเสียงสั่นสะเทือนขณะจานหมุน (สำหรับ HDD)</p>
                  <img src="images/ssd_in.png" alt="ssd_in" style="width:100%; max-width:500px; display:block; margin:25px auto; border-radius:25px; border:4px solid #ffffff; box-shadow:0 10px 20px rgba(0,0,0,0.15);">` 
    },
    { 
        title: "4.7 การติดตั้งแผ่นการ์ดจอ", 
        content: `<h1>4.7 การติดตั้งแผ่นการ์ดจอ (Expansion Cards)</h1>
                  <p><strong>PCIe Slot :</strong> การ์ดจอสมัยใหม่มีน้ำหนักมาก ต้องให้เด็กขันน็อตยึดที่ตัวเคสให้แน่นเสมอ เพื่อป้องกันอาการการ์ดจอห้อย (GPU Sag) ซึ่งอาจทำให้พอร์ต PCIe บนเมนบอร์ดเสียหายได้ในระยะยาว</p>
                  <img src="images/gpu_in.png" alt="gpu_in" style="width:100%; max-width:500px; display:block; margin:25px auto; border-radius:25px; border:4px solid #ffffff; box-shadow:0 10px 20px rgba(0,0,0,0.15);">` 
    },
    { 
        title: "4.8 การตรวจสอบระบบ (Post-Build)", 
        content: `<h1>4.8 การตรวจสอบระบบ (Post-Build Inspection)</h1>
                  <p><strong>Cable Management :</strong> การจัดสายไฟไม่ใช่แค่ความสวยงาม แต่คือการทำทางลม (Airflow) ไม่ให้ขวางพัดลมระบายความร้อน</p>
                  <p><strong>Verification :</strong> ตรวจสอบว่าไม่มีน็อตหลงเหลืออยู่ในตัวเครื่องก่อนเปิดไฟ เพื่อป้องกันไฟฟ้าลัดวงจร</p>
                  <p><strong>BIOS Post :</strong> หลังจากประกอบเสร็จ ให้ลองเปิดเครื่องแล้วเข้า BIOS เพื่อตรวจสอบว่าเมนบอร์ดมองเห็นอุปกรณ์ครบทุกชิ้นหรือไม่</p>
                  <div style="display: flex; justify-content: space-between; gap: 20px; margin: 25px auto; max-width: 800px;">
                    <img src="images/cable.png" style="width: 48%; border-radius: 20px; border: 4px solid #ffffff; box-shadow: 0 10px 20px rgba(0,0,0,0.15);">
                    <img src="images/biosx.png" style="width: 48%; border-radius: 20px; border: 4px solid #ffffff; box-shadow: 0 10px 20px rgba(0,0,0,0.15);">
                  </div>` 
    },
    { 
        title: "4.9 เสียงสัญญาณแจ้งเตือนจากไบออส",
        content: `<h1>4.9 เสียงสัญญาณแจ้งเตือนจากไบออส (BIOS/UEFI Beep Codes)</h1>
            <p>รหัสลับจากเมนบอร์ด (อ้างอิงคู่มือรุ่นนั้นๆ)</p>
            <p>• <strong>No Beeps :</strong> เมนบอร์ดหรือ CPU อาจเสียหาย หรือไม่มีไฟเลี้ยง</p>
            <p>• <strong>Continuous Short Beeps :</strong> PSU จ่ายไฟไม่พอหรือมีอาการลัดวงจร</p>
            <p>• <strong>Repeating Long Beeps :</strong> RAM หลวม หรือพัง</p>
            <p>• <strong>1 Long, 2-3 Short Beeps :</strong> การ์ดจอ (Graphics Card) เสีย หรือไม่แน่น</p>
            <p>• <strong>High-Low Warble :</strong> CPU ร้อนจัด (Overheating) ระบบสั่งปิดตัวเอง</p>
            <img src="images/beep.png" alt="beep" style="width:100%; max-width:500px; display:block; margin:25px auto; border-radius:25px; border:4px solid #ffffff; box-shadow:0 10px 20px rgba(0,0,0,0.15);">`
    }
];
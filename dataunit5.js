window.courseContentUnit5 = [
    {
        title: "5.1 BIOS และ UEFI: ต่างกันอย่างไร?",
        content: `<h1>5.1 BIOS และ UEFI ต่างกันอย่างไร?</h1>
            <p><strong>BIOS (Basic Input/Output System) :</strong> เป็นเทคโนโลยีเก่า ใช้มานาน ระบบจะเป็นสีฟ้าขาว ตัวอักษรล้วน (Text-based) ข้อจำกัดคือไม่รองรับฮาร์ดดิสก์ความจุเกิน 2.2 TB และการบูตเครื่องจะช้า</p>
            <p><strong>UEFI (Unified Extensible Firmware Interface) :</strong> คือมาตรฐานใหม่ที่เข้ามาแทน BIOS แท้จริงแล้วมันคือระบบปฏิบัติการย่อยๆ ตัวหนึ่ง มี GUI (Graphic User Interface) สวยงาม ใช้เมาส์คลิกได้ รองรับการบูตที่เร็วกว่า ระบบความปลอดภัยดีกว่า (Secure Boot) และรองรับฮาร์ดดิสก์ขนาดใหญ่</p>
            <div style="display: flex; justify-content: space-between; gap: 20px; margin: 25px auto; max-width: 800px;">
                <img src="images/legacy.png" style="width: 48%; border-radius: 20px; border: 4px solid #ffffff; box-shadow: 0 10px 20px rgba(0,0,0,0.15);">
                <img src="images/uefi.png" style="width: 48%; border-radius: 20px; border: 4px solid #ffffff; box-shadow: 0 10px 20px rgba(0,0,0,0.15);">
            </div>`
    },
    {
        title: "5.2 การตั้งค่า BIOS และ UEFI",
        content: `<h1>5.2 การตั้งค่า BIOS และ UEFI</h1>
            <p>การเข้าหน้าตั้งค่าส่วนใหญ่จะทำได้โดยการกดปุ่ม "Delete", "F2" หรือ "F12" ทันทีที่กดปุ่มเปิดเครื่อง (ก่อนที่โลโก้ Windows จะขึ้น)</p>
            <p><strong>สิ่งสำคัญที่ต้องตั้งค่า</strong></p>
            <p>• <strong>Boot Priority :</strong> ลำดับการบูต (เลือกให้บูตจาก USB ก่อนถ้าจะลง Windows)</p>
            <p>• <strong>Date & Time :</strong> ต้องตรงเสมอ เพราะถ้าผิด ระบบจะฟ้องว่า HTTPS ไม่ปลอดภัยและเน็ตจะไม่ติด</p>
            <p>• <strong>XMP/DOCP :</strong> เป็นการเปิดให้ RAM วิ่งที่ความเร็วสูงสุดตามที่ระบุไว้ข้างกล่อง (ถ้าไม่เปิด RAM จะวิ่งแค่ความเร็วพื้นฐาน)</p>
            <p>• <strong>Fan Control :</strong> ปรับความเร็วพัดลม CPU ให้เงียบหรือเย็นตามต้องการ</p>`
    },
    {
        title: "5.3 ตัวอย่างการตั้งค่า BIOS แบบเก่า (Legacy)",
        content: `<h1>5.3 ตัวอย่างการตั้งค่า BIOS แบบเก่า (Legacy)</h1>
            <p>เป็นระบบเมนูตัวอักษรสีขาวบนพื้นน้ำเงิน</p>
            <p>• <strong>การสั่งงาน :</strong> ใช้ได้แค่คีย์บอร์ด (ลูกศรขึ้น-ลง, Enter, Esc)</p>
            <p>• <strong>โครงสร้าง :</strong> เมนูจะเรียงเป็นแถบด้านบน (Main, Advanced, Power, Boot, Exit)</p>
            <p>• <strong>การบันทึก :</strong> ต้องกด F10 เพื่อ Save and Exit เท่านั้น</p>
            <img src="images/legacy_setting.png" alt="legacy_setting" style="width:100%; max-width:500px; display:block; margin:25px auto; border-radius:25px; border:4px solid #ffffff; box-shadow:0 10px 20px rgba(0,0,0,0.15);">`
    },
    {
        title: "5.4 ตัวอย่างการตั้งค่า BIOS แบบ UEFI (Modern)",
        content: `<h1>5.4 ตัวอย่างการตั้งค่า BIOS แบบ UEFI (Modern)</h1>
            <p>เป็นหน้าจอ Graphical สวยงาม</p>
            <p>• <strong>การสั่งงาน :</strong> ใช้เมาส์คลิกได้ มีโหมด "Easy Mode" (ดูภาพรวม) และ "Advanced Mode" (ปรับแต่งละเอียด)</p>
            <p>• <strong>ฟีเจอร์ :</strong> สามารถอัปเดต BIOS ได้ผ่านอินเทอร์เน็ตในหน้าเมนูเลย, มีการแสดงอุณหภูมิ CPU แบบ Real-time, และมีการ Drag & Drop ลำดับการบูต</p>
            <img src="images/uefi_setting.png" alt="uefi_setting" style="width:100%; max-width:500px; display:block; margin:25px auto; border-radius:25px; border:4px solid #ffffff; box-shadow:0 10px 20px rgba(0,0,0,0.15);">`
    },
    {
        title: "5.5 การปรับปรุงข้อมูลใน BIOS (BIOS Update)",
        content: `<h1>5.5 การปรับปรุงข้อมูลใน BIOS (BIOS Update)</h1>
            <p>การอัปเดต BIOS คือการทำให้เมนบอร์ดรองรับ CPU รุ่นใหม่ๆ หรือแก้บั๊กที่เกิดขึ้น</p>
            <p style="color: red;"><strong>ความเสี่ยง :</strong> ถ้าไฟดับระหว่างอัปเดต "บอร์ดอาจจะตาย (Bricked)" ได้ทันที</p>
            <p><strong>วิธีอัปเดต</strong></p>
            <p>1. ดาวน์โหลดไฟล์ BIOS จากเว็บไซต์ผู้ผลิต (เช่น ASUS, Gigabyte, MSI) ตามรุ่นเมนบอร์ด</p>
            <p>2. นำไฟล์ใส่ USB Flash Drive</p>
            <p>3. เข้าหน้า BIOS แล้วเลือกเมนู "Flash Utility" หรือ "Q-Flash"</p>
            <p>4. เลือกไฟล์จาก USB แล้วรอจนครบ 100%</p>
            <img src="images/biosup.png" alt="biosupdate" style="width:100%; max-width:500px; display:block; margin:25px auto; border-radius:25px; border:4px solid #ffffff; box-shadow:0 10px 20px rgba(0,0,0,0.15);">`
    }
];
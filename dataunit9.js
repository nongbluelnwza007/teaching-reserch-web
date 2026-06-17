window.courseContentUnit9 = [
    {
        title: "9.1 กระบวนการแก้ไขปัญหาคอมพิวเตอร์",
        content: `<h1>9.1 กระบวนการแก้ไขปัญหาคอมพิวเตอร์ (The Systematic Troubleshooting Workflow)</h1>
            <p>ช่างมืออาชีพจะไม่ "มั่ว" แต่จะใช้ Scientific Method ในการซ่อม</p>
            <p>• <strong>Symptom Isolation :</strong> แยกให้ออกว่าเป็นปัญหาที่ Hardware (พัง/หลวม) หรือ Software (Config ผิด/ไฟล์เสีย/ไวรัส)</p>
            <p>• <strong>Environmental Audit :</strong> ตรวจสอบปัจจัยภายนอก เช่น ไฟตก, ฝุ่นเยอะ, อุณหภูมิห้องสูง</p>
            <p>• <strong>The "Minimum System" Test :</strong> ถอดทุกอย่างออกให้เหลือแค่ CPU, RAM (1 แถว), เมนบอร์ด และ PSU เพื่อดูว่าบูตขึ้นไหม</p>
            <p>• <strong>Logical Verification :</strong> ทุกครั้งที่แก้ปัญหาได้ ต้องทดสอบ Stress Test ทันทีเพื่อให้มั่นใจว่าไม่ได้เป็นปัญหาที่ปลายเหตุ</p>
            <img src="images/workflow.png" alt="workflow" style="width:100%; max-width:500px; display:block; margin:25px auto; border-radius:25px; border:4px solid #ffffff; box-shadow:0 10px 20px rgba(0,0,0,0.15);">`
    },
    {
        title: "9.2 การแก้ไขปัญหาอุปกรณ์ต่อพ่วง",
        content: `<h1>9.3 การแก้ไขปัญหาอุปกรณ์ต่อพ่วง (Advanced Peripheral Logic)</h1>
            <p>• <strong>I/O Ports & IRQ Conflicts :</strong> ตรวจสอบ Device Manager เพื่อดูว่ามีอุปกรณ์แย่งชิงเลข IRQ กันหรือไม่</p>
            <p>• <strong>USB Power Management :</strong> หากพอร์ต USB ดับบ่อย ให้ปิด "Allow the computer to turn off this device to save power" ใน Device Manager</p>
            <p>• <strong>HDMI/DP Protocol :</strong> หากภาพกระพริบ ให้ลองลด Refresh Rate เพื่อทดสอบมาตรฐานสายสัญญาณ</p>
            <img src="images/usb.png" alt="usb" style="width:100%; max-width:500px; display:block; margin:25px auto; border-radius:25px; border:4px solid #ffffff; box-shadow:0 10px 20px rgba(0,0,0,0.15);">`
    },
    {
        title: "9.3 ประเภทของไวรัสและมัลแวร์เชิงเทคนิค",
        content: `<h1>9.4 ประเภทของไวรัสและมัลแวร์เชิงเทคนิค</h1>
            <p>• <strong>Rootkits :</strong> มัลแวร์ที่ฝังตัวลึกระดับ Kernel หรือ BIOS/UEFI แก้ยากที่สุด</p>
            <p>• <strong>Worms :</strong> แพร่กระจายผ่านช่องโหว่ Network (ควรปิด Port 445 ที่ไม่จำเป็น)</p>
            <p>• <strong>Ransomware :</strong> ใช้ Asymmetric Encryption เข้ารหัสไฟล์ กู้คืนแทบไม่ได้ถ้าไม่มี Backup</p>
            <p>• <strong>Keyloggers :</strong> บันทึกการกดคีย์บอร์ด แฝงมากับโปรแกรมไม่พึงประสงค์</p>
            <img src="images/nod.png" alt="nod" style="width:100%; max-width:500px; display:block; margin:25px auto; border-radius:25px; border:4px solid #ffffff; box-shadow:0 10px 20px rgba(0,0,0,0.15);">`
    },
    {
        title: "9.4 การตรวจสอบและการสร้างระบบป้องกัน",
        content: `<h1>9.5 การตรวจสอบและการสร้างระบบป้องกัน (Defensive Strategy)</h1>
            <p>• <strong>Principle of Least Privilege :</strong> ใช้ User ทั่วไป (Standard User) ในการใช้งานปกติ เพื่อจำกัดขอบเขตการทำลายของมัลแวร์</p>
            <p>• <strong>Hardening the System</strong></p>
            <p>- เปิด UAC ในระดับสูงสุด<br>
            - ปิด AutoPlay ของแฟลชไดรฟ์<br>
            - Network Isolation ปิดบริการที่ไม่จำเป็น เช่น Remote Desktop</p>
            <div style="display: flex; justify-content: space-between; gap: 20px; margin: 25px auto; max-width: 800px;">
                <img src="images/user.png" style="width: 48%; border-radius: 20px; border: 4px solid #ffffff; box-shadow: 0 10px 20px rgba(0,0,0,0.15);">
                <img src="images/control.png" style="width: 48%; border-radius: 20px; border: 4px solid #ffffff; box-shadow: 0 10px 20px rgba(0,0,0,0.15);">
            </div>`
    },
    {
        title: "9.5 โปรแกรมตรวจจับและกำจัด",
        content: `<h1>9.6 โปรแกรมตรวจจับและกำจัด (Advanced Security Tools)</h1>
            <p>• <strong>Windows Defender :</strong> ใช้ AI วิเคราะห์ไฟล์ใหม่ๆ เสมอ (ปิดไม่ได้)</p>
            <p>• <strong>Offline Scanning :</strong> สแกนระดับ Rootkit ก่อนที่ Windows จะเริ่มทำงานปกติ</p>
            <p>• <strong>Sysinternals Suite (Autoruns) :</strong> เครื่องมือระดับเทพ! ใช้ดูโปรแกรมที่แอบเปิดตัวตอนบูตเครื่อง (Registry, Tasks, Services)</p>
            <img src="images/defender.png" alt="defend" style="width:100%; max-width:500px; display:block; margin:25px auto; border-radius:25px; border:4px solid #ffffff; box-shadow:0 10px 20px rgba(0,0,0,0.15);">`
    }
];
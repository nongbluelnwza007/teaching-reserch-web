window.courseContentUnit7 = [
    {
        title: "7.1 ซอฟต์แวร์ใช้งาน (Application Software)",
        content: `<h1>7.1 ซอฟต์แวร์ใช้งาน (Application Software)</h1>
            <p>ซอฟต์แวร์ประยุกต์เปรียบเสมือนเครื่องมือที่ช่วยให้ผู้ใช้งานสามารถทำงานได้ตามวัตถุประสงค์ แบ่งเป็นประเภทหลักได้ดังนี้</p>
            <p>• <strong>ซอฟต์แวร์ระบบ (System Software) :</strong> เช่น โปรแกรมควบคุมอุปกรณ์ (Driver) ที่ทำหน้าที่เชื่อมประสานระหว่างฮาร์ดแวร์และระบบปฏิบัติการ</p>
            <p>• <strong>ซอฟต์แวร์ประยุกต์ (Application Software) :</strong> โปรแกรมที่ผู้ใช้เรียกใช้งานโดยตรง เช่น โปรแกรมเว็บเบราว์เซอร์, ชุดโปรแกรมสำนักงาน (Microsoft Office), หรือโปรแกรมเฉพาะทางด้านกราฟิกและงานออกแบบ</p>
            <img src="images/appli.png" alt="app" style="width:100%; max-width:500px; display:block; margin:25px auto; border-radius:25px; border:4px solid #ffffff; box-shadow:0 10px 20px rgba(0,0,0,0.15);">`
    },
    {
        title: "7.2 การติดตั้งโปรแกรม Microsoft Office",
        content: `<h1>7.2 การติดตั้งโปรแกรม Microsoft Office</h1>
            <p>การติดตั้งชุดโปรแกรมสำนักงาน Microsoft Office มีวิธีการที่สำคัญ ดังนี้</p>
            <p>• <strong>การติดตั้งแบบออนไลน์ (Click-to-Run) :</strong> ระบบจะดาวน์โหลดไฟล์ติดตั้งและทรัพยากรที่จำเป็นโดยตรงจากเซิร์ฟเวอร์ของ Microsoft ทำให้ผู้ใช้ได้รับเวอร์ชันที่อัปเดตที่สุด</p>
            <p>• <strong>การติดตั้งแบบออฟไลน์ (Offline Installer) :</strong> เป็นการติดตั้งผ่านไฟล์ขนาดใหญ่ที่เตรียมไว้ล่วงหน้า เหมาะสำหรับการติดตั้งในสภาพแวดล้อมที่เครือข่ายอินเทอร์เน็ตจำกัด</p>
            <p><strong>ข้อควรระวัง :</strong> กระบวนการติดตั้งจำเป็นต้องมีการลงชื่อเข้าใช้งาน (Login) ด้วยบัญชีผู้ใช้เพื่อยืนยันสิทธิ์การใช้งาน (License Activation) ให้ถูกต้อง</p>
            <img src="images/office.png" alt="office" style="width:100%; max-width:500px; display:block; margin:25px auto; border-radius:25px; border:4px solid #ffffff; box-shadow:0 10px 20px rgba(0,0,0,0.15);">`
    },
    {
        title: "7.3 การติดตั้งโปรแกรมใช้งานทั่วไป",
        content: `<h1>7.3 การติดตั้งโปรแกรมใช้งานทั่วไป</h1>
            <p>ในการติดตั้งซอฟต์แวร์ทั่วไป ควรยึดหลักการดังนี้</p>
            <p>• <strong>การเลือกรูปแบบการติดตั้ง (Custom Installation) :</strong> ในขั้นตอนการติดตั้ง ผู้ใช้ควรเลือกโหมดแบบกำหนดเอง เพื่อตรวจสอบว่ามีโปรแกรมแฝง (Bloatware) หรือแถบเครื่องมือที่ไม่ต้องการติดตั้งพ่วงมาด้วยหรือไม่</p>
            <p>• <strong>ความปลอดภัยของซอฟต์แวร์ :</strong> ควรติดตั้งซอฟต์แวร์ที่มาจากแหล่งที่มาที่น่าเชื่อถือเท่านั้น เพื่อป้องกันความเสี่ยงจากมัลแวร์หรือซอฟต์แวร์ที่ไม่พึงประสงค์</p>
            <img src="images/adobe.png" alt="adobe" style="width:100%; max-width:500px; display:block; margin:25px auto; border-radius:25px; border:4px solid #ffffff; box-shadow:0 10px 20px rgba(0,0,0,0.15);">`
    },
    {
        title: "7.4 การถอนโปรแกรม (Uninstallation)",
        content: `<h1>7.4 การถอนโปรแกรม (Uninstallation)</h1>
            <p>การถอนการติดตั้งซอฟต์แวร์อย่างถูกวิธีจะช่วยรักษาเสถียรภาพของระบบ</p>
            <p>• <strong>การถอนติดตั้งมาตรฐาน :</strong> ดำเนินการผ่านทาง Control Panel หรือการตั้งค่าของ Windows เพื่อให้ระบบจัดการลบไฟล์และแก้ไข Registry Keys ที่เกี่ยวข้อง</p>
            <p>• <strong>การจัดการไฟล์ตกค้าง :</strong> ในกรณีที่โปรแกรมทิ้งไฟล์ขยะไว้ในโฟลเดอร์ AppData หรือ Program Files ควรทำการตรวจสอบและลบไฟล์ดังกล่าวออกเพื่อให้พื้นที่จัดเก็บข้อมูลสะอาดและมีประสิทธิภาพสูงสุด</p>
            <img src="images/uninstall.png" alt="uninstall" style="width:100%; max-width:500px; display:block; margin:25px auto; border-radius:25px; border:4px solid #ffffff; box-shadow:0 10px 20px rgba(0,0,0,0.15);">`
    },
    {
        title: "7.5 การติดตั้งโปรแกรมควบคุมอุปกรณ์ (Device Driver)",
        content: `<h1>7.5 การติดตั้งโปรแกรมควบคุมอุปกรณ์ (Device Driver)</h1>
            <p>Driver คือซอฟต์แวร์ระดับ Kernel ที่สื่อสารกับฮาร์ดแวร์โดยตรง</p>
            <p>• <strong>Plug and Play (PnP) :</strong> ระบบปฏิบัติการสามารถตรวจพบและติดตั้ง Driver พื้นฐานได้โดยอัตโนมัติเมื่อมีการเชื่อมต่อฮาร์ดแวร์</p>
            <p>• <strong>การตรวจสอบสถานะ :</strong> หากอุปกรณ์ใดทำงานผิดปกติ ให้ตรวจสอบผ่าน Device Manager หากพบเครื่องหมายตกใจสีเหลือง (!) หมายความว่า Driver ไม่ตรงรุ่นหรือทำงานผิดพลาด</p>
            <p>• <strong>การค้นหา Driver :</strong> หากระบบไม่พบ Driver สามารถใช้ค่า Hardware ID เพื่อค้นหาซอฟต์แวร์ที่ถูกต้องจากเว็บไซต์ของผู้ผลิตโดยตรง</p>
            <div style="display: flex; justify-content: space-between; gap: 20px; margin: 25px auto; max-width: 800px;">
                <img src="images/driver1.png" style="width: 48%; border-radius: 20px; border: 4px solid #ffffff; box-shadow: 0 10px 20px rgba(0,0,0,0.15);">
                <img src="images/driver2.png" style="width: 48%; border-radius: 20px; border: 4px solid #ffffff; box-shadow: 0 10px 20px rgba(0,0,0,0.15);">
            </div>`
    },
    {
        title: "7.6 การสำรองและจัดการไดรเวอร์ (Driver Backup)",
        content: `<h1>7.6 การสำรองและจัดการไดรเวอร์ (Driver Backup)</h1>
            <p>การสำรองข้อมูล Driver เป็นทักษะสำคัญสำหรับผู้ดูแลระบบ</p>
            <p>• <strong>ความสำคัญ :</strong> ช่วยให้สามารถติดตั้งระบบปฏิบัติการใหม่ได้รวดเร็วขึ้น โดยเฉพาะในอุปกรณ์รุ่นเก่าที่หา Driver ดาวน์โหลดได้ยาก</p>
            <p>• <strong>วิธีการสำรอง :</strong> สามารถใช้เครื่องมือภายนอกหรือคำสั่งผ่าน PowerShell เช่น <code>Export-WindowsDriver</code> เพื่อดึงข้อมูล Driver ทั้งหมดที่ใช้งานอยู่ในระบบออกมาเก็บไว้ในแหล่งจัดเก็บภายนอก</p>
            <img src="images/backup.png" alt="backup" style="width:100%; max-width:500px; display:block; margin:25px auto; border-radius:25px; border:4px solid #ffffff; box-shadow:0 10px 20px rgba(0,0,0,0.15);">`
    }
];
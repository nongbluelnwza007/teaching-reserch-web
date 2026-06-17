window.courseContentUnit10 = [
    {
        title: "10.1 การบำรุงรักษาเครื่องและอุปกรณ์ต่อพ่วง",
        content: `<h1>10.1 การบำรุงรักษาเครื่องและอุปกรณ์ต่อพ่วง (Hardware Maintenance)</h1>
            <p>การบำรุงรักษาในระดับวิศวกรรมไม่ใช่แค่การกำจัดฝุ่น แต่คือการรักษา "Physical Integrity" ของฮาร์ดแวร์ให้อยู่ในสถานะที่พร้อมทำงานตลอดเวลา</p>
            <p>• <strong>Advanced Thermal Management</strong><br>
            - <strong>Airflow Engineering :</strong> การจัดสายไฟ (Cable Management) เป็นหัวใจสำคัญ สายไฟที่เกะกะจะขวางทางลมและสร้าง "Dead Zone" ซึ่งเป็นจุดสะสมความร้อน ทำให้ HDD และ RAM เสื่อมสภาพเร็วขึ้น<br>
            - <strong>Thermal Paste Application :</strong> การทาซิลิโคนต้องคำนึงถึงการไล่ฟองอากาศ ควรใช้วิธีแต้มจุดตรงกลางหรือรูปกากบาท เพื่อให้เนื้อซิลิโคนกระจายตัวครอบคลุมผิวสัมผัสระหว่าง CPU Heat Spreader และ Heatsink ให้ได้มากที่สุด</p>
            <p>• <strong>Contact & Connector Hygiene</strong><br>
            - พอร์ตเชื่อมต่อ เช่น USB, HDMI เมื่อใช้งานไปนานๆ อาจเกิดออกไซด์บนผิวสัมผัส การเลือกใช้ Contact Cleaner ต้องมั่นใจว่าเป็นสูตร "Non-residue" (ระเหยแห้งทันที ไม่ทิ้งคราบน้ำมัน) เพื่อป้องกันความต้านทานไฟฟ้าที่สูงเกินไปจนสัญญาณขาดหาย</p>
            <p>• <strong>Peripherals Maintenance</strong><br>
            - อุปกรณ์ต่อพ่วงอย่างเมาส์และคีย์บอร์ดเป็นแหล่งสะสมของเซลล์ผิวหนังและไขมัน ซึ่งเป็นอาหารชั้นดีของเชื้อราในสภาวะความชื้นสูง ควรทำความสะอาดด้วยแอลกอฮอล์ 70% และสำลีพันก้านเพื่อล้างคราบไขมันที่สวิตช์และปุ่มกด</p>
            <div style="display: flex; justify-content: space-between; gap: 20px; margin: 25px auto; max-width: 800px;">
                <img src="images/cool.png" style="width: 48%; border-radius: 20px; border: 4px solid #ffffff; box-shadow: 0 10px 20px rgba(0,0,0,0.15);">
                <img src="images/key.png" style="width: 48%; border-radius: 20px; border: 4px solid #ffffff; box-shadow: 0 10px 20px rgba(0,0,0,0.15);">
            </div>`
    },
    {
        title: "10.2 การบำรุงรักษาซอฟต์แวร์",
        content: `<h1>10.2 การบำรุงรักษาซอฟต์แวร์ (Software Maintenance Lifecycle)</h1>
            <p>การบำรุงรักษาซอฟต์แวร์มีเป้าหมายสูงสุดคือการรักษา "Registry & File System Integrity"</p>
            <p>• <strong>File System Audit</strong><br>
            - <strong>System File Checker (sfc /scannow) :</strong> ใช้ตรวจสอบความถูกต้องของไฟล์ระบบ Windows หากตรวจพบไฟล์ที่เสียหายหรือถูกดัดแปลงโดยมัลแวร์ ระบบจะทำการซ่อมแซมให้โดยอัตโนมัติ<br>
            - <strong>Check Disk (chkdsk /f /r) :</strong> ใช้สำหรับตรวจสอบความเสียหายในระดับโครงสร้างดิสก์ (Logical) และค้นหา Bad Sectors บนผิวจานแม่เหล็ก (Physical) สำหรับ HDD</p>
            <p>• <strong>Storage Optimization (SSD Focus)</strong><br>
            - <strong>TRIM Command :</strong> SSD จำเป็นต้องรันคำสั่ง TRIM เพื่อจัดการ Block ข้อมูลที่ไม่ได้ใช้งานแล้วให้ว่าง เพื่อคงประสิทธิภาพการเขียนข้อมูลไว้เสมอ<br>
            - <strong>Defragmentation Policy :</strong> การทำ Defrag บน SSD เป็นสิ่งที่ต้องห้ามเด็ดขาด! เพราะการกระทำดังกล่าวเป็นการสร้าง Write Cycles โดยไม่จำเป็น ซึ่งจะลดอายุการใช้งานของ Cell ใน SSD อย่างรวดเร็ว</p>
            <p>• <strong>Software Bloat Control</strong><br>
            - ควรหมั่นลบไฟล์แคชที่ล้าสมัยในโฟลเดอร์ <code>C:\\Windows\\SoftwareDistribution\\Download</code> ซึ่งไฟล์เหล่านี้คือตัวการที่ทำให้เนื้อที่ใน Drive C: หายไปโดยไม่จำเป็น</p>
            <div style="display: flex; justify-content: space-between; gap: 20px; margin: 25px auto; max-width: 800px;">
                <img src="images/scannow.png" style="width: 48%; border-radius: 20px; border: 4px solid #ffffff; box-shadow: 0 10px 20px rgba(0,0,0,0.15);">
                <img src="images/ssdcheck.png" style="width: 48%; border-radius: 20px; border: 4px solid #ffffff; box-shadow: 0 10px 20px rgba(0,0,0,0.15);">
            </div>
            `
    },
    {
        title: "10.3 การสำรองและกู้คืนข้อมูล",
        content: `<h1>10.3 การสำรองและกู้คืนข้อมูล (Backup & Disaster Recovery)</h1>
            <p>มืออาชีพไม่ทำแค่ Copy ไฟล์ แต่จะเน้นการจัดการในระดับ "Image-based Backup"</p>
            <p>• <strong>System Image Backup :</strong> การสร้าง "ภาพถ่าย" ของระบบปฏิบัติการทั้งลูกในขณะที่เครื่องทำงานสมบูรณ์ (Snapshot) เป็นวิธีที่ประหยัดเวลาที่สุด เพราะสามารถกู้คืนทั้ง OS, โปรแกรม และการตั้งค่าต่างๆ กลับมาใช้งานได้ภายใน 10-15 นาที</p>
            <p>• <strong>Versioning System :</strong> การสำรองข้อมูลต้องใช้ระบบเวอร์ชัน (เช่น การเก็บไฟล์ย้อนหลัง 7 วัน) เพื่อป้องกันกรณีร้ายแรง เช่น การเผลอเซฟไฟล์ทับ (Overwrite) หรือกรณีที่ไฟล์งานถูก Ransomware เข้ารหัส</p>
            <p>• <strong>Offsite Redundancy :</strong> กลยุทธ์การสำรองที่ดีที่สุดคือ "3-2-1 Rule" คือข้อมูลสำคัญต้องมี 3 ชุด ในสื่อเก็บข้อมูล 2 รูปแบบ และต้องมี 1 ชุดอยู่ที่ Offsite (Cloud หรือ NAS ที่แยกวงจรไฟฟ้าออกจากคอมพิวเตอร์หลัก) เพื่อป้องกันเหตุการณ์ไฟไหม้หรือไฟกระชากที่อาจลามถึงอุปกรณ์สำรองข้อมูลในที่เดียวกัน</p>
            <img src="images/recovery.png" alt="recovery" style="width:100%; max-width:500px; display:block; margin:25px auto; border-radius:25px; border:4px solid #ffffff; box-shadow:0 10px 20px rgba(0,0,0,0.15);">`
    },
    {
        title: "10.4 การปรับปรุงเครื่อง (System Upgrading Strategy)",
        content: `<h1>10.4 การปรับปรุงเครื่อง (System Upgrading Strategy)</h1>
            <p>การอัปเกรดไม่ใช่การเปลี่ยนของใหม่ที่แพงที่สุด แต่คือการแก้ปัญหา "Performance Bottleneck"</p>
            <p>• <strong>Step 1: Storage Shift :</strong> หากระบบยังใช้ HDD เป็น Drive C: การย้ายไปใช้ SSD (SATA หรือ NVMe) คือการลงทุนที่คุ้มค่าที่สุด เพราะช่วยลด Latency ในการอ่านไฟล์ระบบได้มหาศาล</p>
            <p>• <strong>Step 2: RAM Dual Channel :</strong> การเพิ่ม RAM ไม่ใช่แค่เรื่อง "ความจุ" แต่ต้องคำนึงถึง "Bandwidth" การใส่ RAM 2 แถวที่สเปกเหมือนกันจะเปิดใช้งาน Dual Channel ทำให้ระบบส่งผ่านข้อมูลได้เร็วขึ้นเกือบ 2 เท่า</p>
            <p>• <strong>Step 3: Firmware & BIOS Upgrading :</strong> อัปเดต BIOS เพื่อรับ Microcode ล่าสุดของ CPU ซึ่งช่วยแก้ช่องโหว่ความปลอดภัยระดับฮาร์ดแวร์ (เช่น Spectre/Meltdown) ข้อควรระวัง: ต้องทำในสภาพแวดล้อมที่ไฟนิ่งที่สุด หรือทำผ่าน UPS เท่านั้นเพื่อป้องกันการ Bricked</p>
            <p>• <strong>Step 4: Driver Refinement :</strong> หลังอัปเกรดอุปกรณ์ (โดยเฉพาะการ์ดจอ) ต้องทำ "Driver Clean Install" โดยใช้เครื่องมืออย่าง DDU เพื่อกำจัดไฟล์ไดรเวอร์เก่าที่ตกค้างออกให้สะอาดก่อนติดตั้งไดรเวอร์ใหม่ ป้องกันปัญหาการทับซ้อนกันของ DLL Files</p>
            <div style="display: flex; justify-content: space-between; gap: 20px; margin: 25px auto; max-width: 800px;">
                <img src="images/change.png" style="width: 48%; border-radius: 20px; border: 4px solid #ffffff; box-shadow: 0 10px 20px rgba(0,0,0,0.15);">
                <img src="images/ramslot.png" style="width: 48%; border-radius: 20px; border: 4px solid #ffffff; box-shadow: 0 10px 20px rgba(0,0,0,0.15);">
            </div>
            `
    }
];
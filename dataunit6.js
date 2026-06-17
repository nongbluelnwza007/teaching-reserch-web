window.courseContentUnit6 = [
    {
        title: "6.1 สถาปัตยกรรมของระบบปฏิบัติการ",
        content: `<h1>6.1 สถาปัตยกรรมของระบบปฏิบัติการ (Architecture of OS)</h1>
            <p>การเข้าใจ OS คือการเข้าใจระดับสิทธิ์ในการเข้าถึงฮาร์ดแวร์ (Privilege Levels)</p>
            <p>• <strong>Kernel Layer (Ring 0) :</strong> คือ "สมองส่วนกลาง" บริหารจัดการ CPU Scheduling, Memory Management (RAM), และ Hardware Drivers หาก Kernel เจอปัญหาที่ไม่สามารถแก้ได้ จะเกิด BSOD (Blue Screen of Death) ทันทีเพื่อป้องกันไม่ให้ข้อมูลใน SSD พัง</p>
            <p>• <strong>Hardware Abstraction Layer (HAL) :</strong> เป็นเลเยอร์ตัวกลางที่ทำให้ Kernel ไม่ต้องรู้จักฮาร์ดแวร์ทุกรุ่นบนโลก มันจะสื่อสารผ่าน Driver เพื่อสั่งงานอุปกรณ์ต่างๆ ให้ทำงานภายใต้มาตรฐานเดียวกัน</p>
            <p>• <strong>Application Layer (Ring 3) :</strong> พื้นที่ทำงานของโปรแกรมต่างๆ (User Mode) รวมถึง Runtime Libraries เช่น .NET Framework, C++ Redistributables หากโปรแกรมในเลเยอร์นี้ค้าง OS สามารถตัดการทำงาน (Kill Process) ได้โดยไม่กระทบต่อตัว Kernel</p>
            <div style="display: flex; justify-content: space-between; gap: 15px; margin: 25px auto; max-width: 900px;">
                <img src="images/kernel.png" style="width: 32%; border-radius: 20px; border: 4px solid #ffffff; box-shadow: 0 10px 20px rgba(0,0,0,0.15);">
                <img src="images/hal.png" style="width: 32%; border-radius: 20px; border: 4px solid #ffffff; box-shadow: 0 10px 20px rgba(0,0,0,0.15);">
                <img src="images/app.png" style="width: 32%; border-radius: 20px; border: 4px solid #ffffff; box-shadow: 0 10px 20px rgba(0,0,0,0.15);">
            </div>`
    },
    {
        title: "6.2 การเตรียมตัวระดับมืออาชีพ",
        content: `<h1>6.2 การเตรียมตัวระดับมืออาชีพ (Professional Preparation)</h1>
            <p>การติดตั้งที่ได้มาตรฐานเริ่มต้นที่การวางแผน</p>
            <p><strong>Partition Topology (การวางผังดิสก์)</strong></p>
            <p>• <strong>EFI System Partition (100MB) :</strong> เก็บไฟล์ Bootloader (.efi) ที่ UEFI BIOS จะอ่านเพื่อเริ่มระบบ</p>
            <p>• <strong>MSR Partition (16MB) :</strong> ส่วนสงวนที่ Windows ใช้จัดการ Metadata ของ Partition ต่างๆ</p>
            <p>• <strong>Primary Partition (C:) :</strong> ติดตั้ง Windows และ Application พื้นฐาน</p>
            <p>• <strong>Data Partition (D:) :</strong> แยกเก็บไฟล์งานเพื่อความปลอดภัย หาก Windows พังหรือต้องลงใหม่ ข้อมูลใน D: จะไม่ถูกแตะต้อง</p>
            <p><strong>Media Preparation (USB Boot) :</strong> ต้องใช้มาตรฐาน FAT32 เท่านั้นสำหรับการบูตแบบ UEFI เพื่อให้ BIOS อ่านไฟล์ boot ได้โดยตรง และต้องเลือก Partition Scheme เป็น GPT สำหรับเครื่องรุ่นใหม่</p>`
    },
    {
        title: "6.3 การติดตั้ง Windows 10",
        content: `<h1>6.3 การติดตั้ง Windows 10 (Legacy & UEFI Hybrid)</h1>
            <p>Windows 10 เป็นระบบที่ปรับตัวได้กับฮาร์ดแวร์ทั้งเก่าและใหม่</p>
            <p>• <strong>Boot Flexibility :</strong> รองรับทั้งแบบ Legacy BIOS (CSM) และ UEFI ทำให้สามารถติดตั้งบนเมนบอร์ดที่ไม่มี TPM ได้โดยไม่มีเงื่อนไข</p>
            <p>• <strong>Disk Initialization :</strong> รองรับทั้ง MBR (จำกัดพื้นที่ 2TB) และ GPT</p>
            <p><strong>Installation Logic</strong></p>
            <p>1. <strong>Boot Phase :</strong> ระบบอ่าน Boot Loader จาก USB</p>
            <p>2. <strong>Partitioning Phase :</strong> หากเครื่องเดิมใช้ MBR แล้วต้องการย้ายมาใช้ GPT ต้องใช้คำสั่ง diskpart > clean เพื่อล้างข้อมูลและเริ่มต้นใหม่ (Initialize)</p>
            <p>3. <strong>Registry Creation :</strong> ระบบสร้างไฟล์ฐานข้อมูลการตั้งค่า (Registry Hives) ลงบนดิสก์</p>
            <img src="images/win10.png" alt="win10" style="width:100%; max-width:500px; display:block; margin:25px auto; border-radius:25px; border:4px solid #ffffff; box-shadow:0 10px 20px rgba(0,0,0,0.15);">`
    },
    {
        title: "6.4 การติดตั้ง Windows 11",
        content: `<h1>6.4 การติดตั้ง Windows 11 (Security-First Architecture)</h1>
            <p>Windows 11 เปลี่ยนมาตรฐานการติดตั้งให้เข้าสู่ยุค Hardware Security</p>
            <p>• <strong>Hardware Requirements :</strong> บังคับต้องมี TPM 2.0 (ชิปเก็บกุญแจเข้ารหัส) และ Secure Boot (ตรวจสอบลายเซ็นดิจิทัลของซอฟต์แวร์ที่บูต) เพื่อป้องกันการโจมตีระดับ Bootkit</p>
            <p>• <strong>Network Mandatory :</strong> บังคับเชื่อมต่อ Internet ระหว่างติดตั้งเพื่อรับ Security Patch ตั้งแต่ Day 1</p>
            <p>• <strong>เทคนิคการจัดการ (Bypass) :</strong> กด Shift + F10 พิมพ์ <code>OOBE\\BYPASSNRO</code> เพื่อข้ามการบังคับใช้เน็ตและ Microsoft Account</p>
            <p>• <strong>UEFI Exclusive :</strong> บังคับใช้เฉพาะโหมด UEFI และ GPT เท่านั้น ตัดระบบ Legacy ทิ้งทั้งหมดเพื่อประสิทธิภาพความปลอดภัยสูงสุด</p>
            <img src="images/win11.png" alt="win11" style="width:100%; max-width:500px; display:block; margin:25px auto; border-radius:25px; border:4px solid #ffffff; box-shadow:0 10px 20px rgba(0,0,0,0.15);">`
    },
    {
        title: "6.5 การปรับแต่งระบบหลังติดตั้ง",
        content: `<h1>6.5 การปรับแต่งระบบหลังติดตั้ง (Post-Installation Tuning)</h1>
            <p>ติดตั้งเสร็จไม่ใช่จุดจบ แต่คือการเริ่มต้นปรับจูนให้คอมแรงเต็มประสิทธิภาพ</p>
            <p>• <strong>Driver Management :</strong> ใช้ Device Manager ตรวจสอบสถานะ หากเจอ "Unknown Device" ให้ดู Hardware ID แล้วค้นหา Driver จากผู้ผลิตโดยตรง</p>
            <p>• <strong>Power Profile :</strong> เปลี่ยนจาก "Balanced" เป็น "High Performance" เพื่อปลดล็อกให้ CPU วิ่งที่ Boost Clock ได้ทันที</p>
            <p>• <strong>Virtual Memory (Paging File) :</strong> สำหรับเครื่อง RAM น้อย ให้ตั้งค่า Minimum และ Maximum ให้เป็นเลขเดียวกันใน SSD เพื่อป้องกันการกระตุกขณะระบบขยายไฟล์ Paging</p>
            <p>• <strong>Services Cleanup :</strong> ใช้ Task Manager ปิดโปรแกรมที่เปิดตัวอัตโนมัติ (Startup Apps) และใช้คำสั่ง services.msc เพื่อปิดบริการ Telemetry ที่คอยส่งข้อมูลการใช้งานกลับไปที่ Microsoft</p>
            <img src="images/post.png" alt="post" style="width:100%; max-width:500px; display:block; margin:25px auto; border-radius:25px; border:4px solid #ffffff; box-shadow:0 10px 20px rgba(0,0,0,0.15);">`
    }
];
window.courseContentUnit8 = [
    {
        title: "8.1 การตรวจสอบและรายงานผลการทดสอบ",
        content: `<h1>8.1 การตรวจสอบและรายงานผลการทดสอบ (Comprehensive Stress Testing)</h1>
            <p>นอกจากการเปิดโปรแกรมทดสอบแล้ว ผู้เรียนควรเข้าใจกระบวนการอ่านค่าและการวิเคราะห์เชิงลึก</p>
            <p>• <strong>Stress Testing (Deep Analysis)</strong><br>
            - <strong>CPU Thermal Throttling :</strong> หากอุณหภูมิพุ่งเกินขีดจำกัด (90-95°C) CPU จะลดความเร็วลงเพื่อป้องกันความเสียหาย ซึ่งบ่งบอกถึงการติดตั้งซิงค์ที่ไม่สมบูรณ์หรือซิลิโคนเสื่อมสภาพ<br>
            - <strong>PSU Stability (Voltage Ripple) :</strong> ค่าแรงดัน 12V, 5V, 3.3V หากผันผวนเกิน ±5% ขณะโหลดหนัก แสดงว่า PSU ไม่มีคุณภาพหรือเสื่อมสภาพ</p>

            <img src="images/cpu_temp.png" alt="cputemp" style="width:100%; max-width:500px; display:block; margin:25px auto; border-radius:25px; border:4px solid #ffffff; box-shadow:0 10px 20px rgba(0,0,0,0.15);">

            <p>• <strong>Storage Health (SMART Data Analysis)</strong><br>
            - <strong>Reallocated Sector Count :</strong> หากไม่ใช่ 0 แสดงว่าดิสก์เริ่มมี Bad Sector ต้องรีบเปลี่ยน<br>
            - <strong>Total Host Writes :</strong> ใช้ประเมินอายุการใช้งานที่เหลืออยู่ของ SSD</p>

            <img src="images/storage.png" alt="storage" style="width:100%; max-width:500px; display:block; margin:25px auto; border-radius:25px; border:4px solid #ffffff; box-shadow:0 10px 20px rgba(0,0,0,0.15);">

            <p>• <strong>Testing Report Template :</strong> รายงานควรมีตารางเปรียบเทียบ "Before & After" เพื่อยืนยันประสิทธิภาพของระบบ</p>
            `
    },
    {
        title: "8.2 การจัดการพาร์ทิชันระดับล่าง",
        content: `<h1>8.2 การจัดการพาร์ทิชันระดับล่าง (Advanced Disk Partitioning)</h1>
            <p>การจัดการพาร์ทิชันไม่ใช่เพียงการแบ่งพื้นที่ แต่ต้องเข้าใจโครงสร้างของ Storage Topology</p>
            <p>• <strong>Partition Style</strong><br>
            - <strong>MBR :</strong> จำกัด 4 พาร์ทิชันหลัก รองรับความจุสูงสุด 2TB<br>
            - <strong>GPT :</strong> รองรับพาร์ทิชันได้ถึง 128 ส่วน และทนทานต่อข้อมูลเสียหายมากกว่า</p>
            <p>• <strong>Alignment (4K Alignment):</strong> สำหรับ SSD ต้องตรวจสอบให้ตรงกับโครงสร้าง Physical เสมอ เพื่อประสิทธิภาพการอ่านเขียนสูงสุด</p>
            <p>• <strong>Diskpart Command:</strong><br>
            - <code>clean</code>     ล้างข้อมูลและโครงสร้างพาร์ทิชันทั้งหมด<br>
            - <code>convert gpt</code>   เปลี่ยนรูปแบบดิสก์โดยยังรักษาข้อมูลได้ (ต้องทำอย่างถูกวิธี)</p>
            <img src="images/disk.png" alt="disk" style="width:100%; max-width:500px; display:block; margin:25px auto; border-radius:25px; border:4px solid #ffffff; box-shadow:0 10px 20px rgba(0,0,0,0.15);">`
    },
    {
        title: "8.3 การโคลนฮาร์ดดิสก์และการย้ายระบบ",
        content: `<h1>8.3 การโคลนฮาร์ดดิสก์และการย้ายระบบ (Advanced Disk Cloning)</h1>
            <p>การโคลนดิสก์คือการคัดลอก "โครงสร้างทางตรรกะ" ของข้อมูลทั้งหมด</p>
            <p>• <strong>Copy Methods</strong><br>
            - <strong>Intelligent Copy :</strong> แนะนำสำหรับการอัปเกรด (คัดลอกเฉพาะข้อมูลและปรับขนาดพาร์ทิชันให้พอดี)<br>
            - <strong>Sector-by-Sector :</strong> คัดลอกทุกบิตรวมถึงพื้นที่ว่าง (ใช้เวลาและพื้นที่ปลายทางมากกว่า)</p>
            <p>• <strong>Post-Cloning Configuration</strong><br>
            - <strong>Boot Loader Rebuild :</strong> หากเครื่องบูตไม่ติด ให้ใช้คำสั่ง <code>bootrec /rebuildbcd</code> ใน Windows RE<br>
            - <strong>Data Wiping :</strong> หากต้องการทำลายข้อมูลดิสก์เก่า ให้ใช้คำสั่ง <strong>Secure Erase</strong> ของผู้ผลิต SSD เพื่อลบข้อมูลระดับไฟฟ้า ป้องกันการกู้คืน</p>
            <img src="images/clone.png" alt="clone" style="width:100%; max-width:500px; display:block; margin:25px auto; border-radius:25px; border:4px solid #ffffff; box-shadow:0 10px 20px rgba(0,0,0,0.15);">`
    }
];
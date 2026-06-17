window.courseContentUnit2 = [
    { 
        title: "2.1 อุปกรณ์ภายใน (Internal Components)", 
        content: `
            <h2>2.1 อุปกรณ์ภายในตัวเครื่อง (Internal Components)</h2>
            <p>ส่วนประกอบเหล่านี้คือ "อวัยวะภายใน" ที่บรรจุอยู่ในเคส ทำหน้าที่ร่วมกันเพื่อให้ระบบเสถียร</p>
            
            <h3>แหล่งจ่ายไฟ (Power Supply Unit - PSU)</h3>
            <p><strong>หน้าที่ :</strong> แปลงไฟฟ้ากระแสสลับ (AC) จากไฟบ้าน (220V) ให้เป็นไฟฟ้ากระแสตรง (DC) แรงดันต่ำ (เช่น 3.3V, 5V, 12V) เพื่อจ่ายให้ชิ้นส่วนต่างๆ</p>
            <p><strong>สิ่งที่ควรรู้ :</strong> การเลือก PSU ไม่ใช่ดูแค่ Watt แต่ต้องดู 80 Plus Certification (มาตรฐานประสิทธิภาพการแปลงไฟ) ถ้า PSU ห่วย คอมอาจจะรีสตาร์ทเอง หรืออุปกรณ์ข้างในพังได้เลยเพราะไฟไม่นิ่ง</p>

            <img src="images/psu.png" alt="psu" style="width:100%; max-width:500px; display:block; margin:25px auto; border-radius:25px; border:4px solid #ffffff; box-shadow:0 10px 20px rgba(0,0,0,0.15);">

            <h3>หน่วยประมวลผลกลาง (CPU - Central Processing Unit)</h3>
            <p><strong>หน้าที่ :</strong> ทำงานแบบ Fetch-Decode-Execute (ดึงคำสั่ง, ถอดรหัส, ปฏิบัติการ) เป็นตัวตัดสินใจทุกอย่างในเครื่อง</p>
            <p><strong>สิ่งที่ควรรู้ :</strong> ยุคนี้ต้องเข้าใจเรื่อง Core/Thread (การทำงานคู่ขนาน) และ Clock Speed (GHz) ยิ่งเลขเยอะยิ่งทำคำสั่งต่อวินาทีได้มาก แต่ต้องควบคู่ไปกับความร้อน ซึ่งต้องมี CPU Cooler (พัดลมหรือชุดน้ำ) มาคอยระบายความร้อนออกเสมอ</p>

            <img src="images/cpu.png" alt="cpu" style="width:100%; max-width:500px; display:block; margin:25px auto; border-radius:25px; border:4px solid #ffffff; box-shadow:0 10px 20px rgba(0,0,0,0.15);">

            <h3>หน่วยความจำหลัก (RAM - Random Access Memory)</h3>
            <p><strong>หน้าที่ :</strong> เก็บข้อมูลที่ CPU ต้องเรียกใช้แบบสุ่ม (Random Access) ได้ทันที ความเร็วของ RAM สูงกว่า SSD/HDD หลายเท่า</p>
            <p><strong>สิ่งที่ควรรู้ :</strong> RAM เป็นแบบ Volatile (ข้อมูลหายเมื่อไม่มีไฟเลี้ยง) ปัจจุบันที่นิยมคือ DDR4/DDR5 ซึ่งมีความเร็ว (Bus Speed) ต่างกัน การใส่ RAM แบบ Dual Channel (ใส่ 2 แถว) จะช่วยเพิ่มแบนด์วิดท์ในการรับส่งข้อมูลได้เป็นเท่าตัว</p>

            <img src="images/ram.png" alt="ram" style="width:100%; max-width:500px; display:block; margin:25px auto; border-radius:25px; border:4px solid #ffffff; box-shadow:0 10px 20px rgba(0,0,0,0.15);">

            <h3>อุปกรณ์จัดเก็บข้อมูล (Storage Devices)</h3>
            <p><strong>หน้าที่ :</strong> เก็บข้อมูลแบบ Non-Volatile (ข้อมูลอยู่ครบแม้ปิดเครื่อง)</p>
            <p><strong>เชิงลึก :</strong> HDD อาศัยจานแม่เหล็กหมุน (Seek Time สูง) ส่วน SSD (โดยเฉพาะ NVMe M.2) ใช้ชิป NAND Flash ที่รับส่งข้อมูลผ่านช่องทาง PCIe ทำให้เร็วกว่า HDD แบบเห็นได้ชัดในเรื่องของ I/O Operations Per Second (IOPS)</p>

            <img src="images/ssd.png" alt="ssd" style="width:100%; max-width:500px; display:block; margin:25px auto; border-radius:25px; border:4px solid #ffffff; box-shadow:0 10px 20px rgba(0,0,0,0.15);">

            <h3>การ์ดแสดงผล (GPU - Graphics Processing Unit)</h3>
            <p><strong>หน้าที่ :</strong> รับภาระหนักจาก CPU ในการคำนวณกราฟิก 3D หรือแม้แต่การประมวลผลงานสาย AI/Deep Learning</p>
            <p><strong>สิ่งที่ควรรู้ :</strong> GPU มีหน่วยความจำของตัวเองเรียกว่า VRAM (Video RAM) ซึ่งมีความเร็วสูงมากเพื่อรองรับการเรนเดอร์ภาพความละเอียดสูงแบบ Real-time</p>

            <img src="images/gpu.png" alt="gpu" style="width:100%; max-width:500px; display:block; margin:25px auto; border-radius:25px; border:4px solid #ffffff; box-shadow:0 10px 20px rgba(0,0,0,0.15);">

        ` 
    },
    { 
        title: "2.2 อุปกรณ์บนแผ่นเมนบอร์ด", 
        content: `
            <h2>2.2 อุปกรณ์บนแผ่นเมนบอร์ด (Motherboard Components)</h2>
            <p>เมนบอร์ดไม่ใช่แค่แผ่นวงจร แต่มันคือ "ระบบโครงสร้างพื้นฐาน" ที่มีตัวควบคุม (Controller) อยู่เต็มไปหมด:</p>

            <h3>ชิปเซ็ต (Chipset - Northbridge & Southbridge) :</h3>
            <p><strong>การทำงาน :</strong> ปัจจุบันรวมเป็นชิปเดียว (PCH - Platform Controller Hub) ทำหน้าที่เป็น "คนคุมจราจร" เชื่อมต่อ CPU กับอุปกรณ์รอบข้าง เช่น SATA (ฮาร์ดดิสก์), USB, และอุปกรณ์ PCIe อื่นๆ</p>

            <img src="images/chip.png" alt="chip" style="width:100%; max-width:500px; display:block; margin:25px auto; border-radius:25px; border:4px solid #ffffff; box-shadow:0 10px 20px rgba(0,0,0,0.15);">

            <h3>ซ็อกเก็ตและสล็อต (Sockets & Slots) :</h3>
            <p><strong>CPU Socket :</strong> มีขาพิน (Pin) ที่ละเอียดมาก ต้องระวังตอนประกอบ ห้ามงอเด็ดขาด</p>
            <p><strong>PCIe Slot :</strong> เป็นช่องเชื่อมต่อความเร็วสูงที่ไม่ได้มีไว้แค่ใส่การ์ดจอ แต่ยังใส่การ์ด Capture, Sound Card, หรือการ์ด LAN ความเร็วสูงได้</p>

            <img src="images/socket.png" alt="socket" style="width:100%; max-width:500px; display:block; margin:25px auto; border-radius:25px; border:4px solid #ffffff; box-shadow:0 10px 20px rgba(0,0,0,0.15);">

            <h3>ระบบส่งกำลังไฟ (VRM - Voltage Regulator Module) :</h3>
            <p><strong>ความสำคัญ :</strong> นี่คือส่วนที่เด็กมักมองข้าม VRM ทำหน้าที่แปลงไฟจาก PSU ให้กลายเป็นไฟที่นิ่งและเหมาะสมที่สุดสำหรับ CPU ยิ่ง VRM ดีและมีซิงค์ระบายความร้อนที่ใหญ่ ระบบยิ่งนิ่งตอนทำงานหนัก</p>

            <img src="images/vrm.png" alt="vrm" style="width:100%; max-width:500px; display:block; margin:25px auto; border-radius:25px; border:4px solid #ffffff; box-shadow:0 10px 20px rgba(0,0,0,0.15);">

            <h3>อินเตอร์เฟซสื่อสาร (I/O Connectors) :</h3>
            <p><strong>Internal Headers :</strong> จุดเชื่อมต่อบนบอร์ดสำหรับสายไฟหน้าเคส (Power Switch, Reset), พอร์ต USB ที่หน้าเคส, และพัดลมระบบ (System Fan)</p>
            <p><strong>BIOS Chip :</strong> หน่วยความจำ ROM ขนาดเล็กที่เก็บเฟิร์มแวร์พื้นฐาน ถ้าบอร์ดพังหรือ BIOS พัง เครื่องจะบูตไม่ขึ้นแม้แต่นิดเดียว (อาการ "บอร์ดตาย")</p>

            <img src="images/bios.png" alt="bios" style="width:100%; max-width:500px; display:block; margin:25px auto; border-radius:25px; border:4px solid #ffffff; box-shadow:0 10px 20px rgba(0,0,0,0.15);">

            <h3>ระบบเสียงและเครือข่าย (Onboard Audio & LAN) :</h3>
            <p><strong>หน้าที่ :</strong> ชิปเล็กๆ บนบอร์ดที่แปลงสัญญาณดิจิทัลเป็นอนาล็อกเพื่อให้เราเสียบหูฟังแล้วมีเสียง รวมถึงชิปควบคุมเครือข่ายที่จัดการแพ็กเก็ตข้อมูลผ่านสาย LAN</p>

            <img src="images/audio_lan.png" alt="audio_lan" style="width:100%; max-width:500px; display:block; margin:25px auto; border-radius:25px; border:4px solid #ffffff; box-shadow:0 10px 20px rgba(0,0,0,0.15);">

        ` 
    }
];
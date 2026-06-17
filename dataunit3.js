window.courseContentUnit3 = [
    { 
        title: "3.1 การเลือกอุปกรณ์ภายในเครื่อง", 
        content: `
            <h1>หน่วยที่ 3: การเลือกใช้อุปกรณ์คอมพิวเตอร์ (Professional Hardware Selection)</h1>
            <h2>3.1 การเลือกอุปกรณ์ภายในเครื่อง: เจาะลึกความสัมพันธ์เชิงโครงสร้าง</h2>
            <p>การเลือกคอมพิวเตอร์คือวิทยาศาสตร์ของการบริหารจัดการความเข้ากันได้ (Compatibility) และสมรรถนะต่อราคา (Performance-per-Dollar)</p>
            
            <h3>CPU (The Computation Engine)</h3>
            <ul>
                <li><strong>Instruction Set & Architecture :</strong> ต้องดูค่า IPC (Instructions Per Clock) มากกว่าแค่ Clock Speed (GHz)</li>
                <li><strong>TDP (Thermal Design Power) :</strong> คือค่าความร้อนที่ซิงค์ต้องจัดการได้ หากซิงค์ระบายไม่ทันจะเกิด <strong>Thermal Throttling</strong> ทำให้เครื่องกระตุก</li>
            </ul>

            <h3>RAM (The High-Speed Workspace)</h3>
            <ul>
                <li><strong>Latency (CL) :</strong> ยิ่งต่ำยิ่งตอบสนองต่อคำสั่ง CPU ได้ไว</li>
                <li><strong>DIMM Topology :</strong> มีผลต่อความเสถียร โดยเฉพาะเมื่อมีการ Overclock</li>
            </ul>

            <h3>Storage (The Data Pipeline)</h3>
            <ul>
                <li><strong>NAND Flash Type :</strong> TLC ให้ความทนทานดีกว่า QLC</li>
                <li><strong>Controller & DRAM Cache :</strong> ถ้าลง OS ควรเลือกแบบที่มี DRAM Cache เพื่อความลื่นไหล</li>
            </ul>

            <h3>Power Supply Unit (PSU)</h3>
            <ul>
                <li><strong>Voltage Regulation :</strong> ต้องมีค่า Ripple Noise ต่ำเพื่อยืดอายุอุปกรณ์</li>
                <li><strong>Single-rail :</strong> สำหรับคอมฯ ทั่วไปแนะนำแบบรางเดียวเพราะจ่ายไฟนิ่งกว่า</li>
            </ul>
            
        ` 
    },
    { 
        title: "3.2 การเลือกอุปกรณ์ต่อพ่วง", 
        content: `
            <h2>3.2 การเลือกอุปกรณ์ต่อพ่วง : การปรับจูนตามความต้องการเฉพาะทาง</h2>
            <h3>Monitor (The Visual Interface) :</h3>
            <ul>
                <li><strong>Color Space :</strong> งานสีต้องดู sRGB/Adobe RGB และค่าความเพี้ยนสี (Delta E) ต้องน้อยกว่า 2</li>
                <li><strong>Motion Blur :</strong> จอเกมมิ่งต้องดูระบบ Sync (G-Sync/FreeSync) และ Response Time (GtG) ที่ต่ำกว่า 1ms</li>
            </ul>

            <h3>UPS (The Power Protection) :</h3>
            <ul>
                <li><strong>Pure Sine Wave :</strong> สำคัญมากสำหรับ PSU แบบ Active PFC ต้องเลือกแบบ Pure Sine Wave เท่านั้นเพื่อความปลอดภัยสูงสุด</li>

                <img src="images/monitor.png" alt="monitor" style="width: 100%; max-width: 600px; display: block; margin: 20px auto;">

            </ul>
            
        ` 
    },
    { 
        title: "3.3 กลยุทธ์การบริหารความเสี่ยง", 
        content: `
            <h2>3.3 การเลือกแหล่งจัดซื้อ : กลยุทธ์การบริหารความเสี่ยง</h2>
            <ul>
                <li><strong>Authorized Dealer vs Gray Market :</strong> ส่วนต่างราคาหลักร้อยไม่คุ้มกับประกันที่เสียไป</li>
                <li><strong>E-Commerce Verification (4-Step Check)</strong>
                    <ol>
                        <li><strong>Store Status :</strong> ตรวจสอบสถานะร้าน (Official/Mall)</li>
                        <li><strong>Review Quality :</strong> อ่านรีวิวจากคนซื้อจริงพร้อมรูปถ่าย</li>
                        <li><strong>Chat Check :</strong> ทดสอบถามคำถามเทคนิค</li>
                        <li><strong>Platform Protection :</strong> ห้ามกดยืนยันรับสินค้าจนกว่าจะตรวจสอบของเสร็จสิ้น</li>

                        <img src="images/shopping.png" alt="shopping" style="width:100%; max-width:500px; display:block; margin:25px auto; border-radius:25px; border:4px solid #ffffff; box-shadow:0 10px 20px rgba(0,0,0,0.15);">
                    </ol>
                </li>
            </ul>
        ` 
    }
];
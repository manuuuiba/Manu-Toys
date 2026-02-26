import sqlite3
import os

def init_db():
    db_path = 'database.sqlite'
    if os.path.exists(db_path):
        os.remove(db_path)
    
    conn = sqlite3.connect(db_path)
    cursor = conn.cursor()

    # Create products table
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS products (
            id INTEGER PRIMARY KEY,
            category TEXT NOT NULL,
            name TEXT NOT NULL,
            description TEXT,
            isLowStock BOOLEAN DEFAULT 0,
            isNew BOOLEAN DEFAULT 0,
            isMostWanted BOOLEAN DEFAULT 0
        )
    ''')

    # Create images table
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS product_images (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            product_id INTEGER,
            image_url TEXT NOT NULL,
            FOREIGN KEY (product_id) REFERENCES products (id)
        )
    ''')

    # Data to migrate
    products_data = [
        {
            'id': 496, 'category': 'mini-gt', 'name': 'McLaren Artura', 'description': 'Flux Green',
            'images': [
                'resources/images/Productos/MINI GT/496 McLaren Artura (Flux Green)/496.jpeg',
                'resources/images/Productos/MINI GT/496 McLaren Artura (Flux Green)/496-2.jpeg',
                'resources/images/Productos/MINI GT/496 McLaren Artura (Flux Green)/496-3.jpeg',
                'resources/images/Productos/MINI GT/496 McLaren Artura (Flux Green)/496-4.jpeg'
            ]
        },
        {
            'id': 702, 'category': 'mini-gt', 'name': 'Nissan Skyline Kenmeri Liberty Walk', 'description': 'White', 'isLowStock': True,
            'images': [
                'resources/images/Productos/MINI GT/702 Nissan Skyline Kenmeri Liberty Walk (White)/702.jpeg',
                'resources/images/Productos/MINI GT/702 Nissan Skyline Kenmeri Liberty Walk (White)/702-2.jpeg',
                'resources/images/Productos/MINI GT/702 Nissan Skyline Kenmeri Liberty Walk (White)/702-3.jpeg',
                'resources/images/Productos/MINI GT/702 Nissan Skyline Kenmeri Liberty Walk (White)/702-4.jpeg'
            ]
        },
        {
            'id': 714, 'category': 'mini-gt', 'name': 'Nissan Silvia (S15) Top Secret', 'description': 'D1GP',
            'images': [
                'resources/images/Productos/MINI GT/714 Nissan Silvia (S15) Top Secret D1GP/714.jpeg',
                'resources/images/Productos/MINI GT/714 Nissan Silvia (S15) Top Secret D1GP/714-2.jpeg',
                'resources/images/Productos/MINI GT/714 Nissan Silvia (S15) Top Secret D1GP/714-3.jpeg',
                'resources/images/Productos/MINI GT/714 Nissan Silvia (S15) Top Secret D1GP/714-4.jpeg'
            ]
        },
        {
            'id': 748, 'category': 'mini-gt', 'name': 'Lamborghini Revuelto', 'description': 'Blu Eleos',
            'images': [
                'resources/images/Productos/MINI GT/748 Lamborghini Revuelto (Blu Eleos)/748.jpeg',
                'resources/images/Productos/MINI GT/748 Lamborghini Revuelto (Blu Eleos)/748-2.jpeg',
                'resources/images/Productos/MINI GT/748 Lamborghini Revuelto (Blu Eleos)/748-3.jpeg',
                'resources/images/Productos/MINI GT/748 Lamborghini Revuelto (Blu Eleos)/748-4.jpeg'
            ]
        },
        {
            'id': 759, 'category': 'mini-gt', 'name': 'Nissan Skyline GT-R R34 V-Spec', 'description': 'Bayside Blue', 'isMostWanted': True,
            'images': [
                'resources/images/Productos/MINI GT/759 Nissan Skyline GT-R R34 V-Spec (Bayside Blue)/759.jpg',
                'resources/images/Productos/MINI GT/759 Nissan Skyline GT-R R34 V-Spec (Bayside Blue)/759-2.jpeg',
                'resources/images/Productos/MINI GT/759 Nissan Skyline GT-R R34 V-Spec (Bayside Blue)/759-3.jpeg',
                'resources/images/Productos/MINI GT/759 Nissan Skyline GT-R R34 V-Spec (Bayside Blue)/759-4.jpeg'
            ]
        },
        {
            'id': 796, 'category': 'mini-gt', 'name': 'Nissan Skyline GT-R R34 V-Spec', 'description': 'Active Red',
            'images': [
                'resources/images/Productos/MINI GT/796 Nissan Skyline GT-R R34 V-Spec (Active Red)/796.jpg',
                'resources/images/Productos/MINI GT/796 Nissan Skyline GT-R R34 V-Spec (Active Red)/796-2.jpeg',
                'resources/images/Productos/MINI GT/796 Nissan Skyline GT-R R34 V-Spec (Active Red)/796-3.jpeg',
                'resources/images/Productos/MINI GT/796 Nissan Skyline GT-R R34 V-Spec (Active Red)/796-4.jpeg'
            ]
        },
        {
            'id': 812, 'category': 'mini-gt', 'name': 'McLaren 750S Spider', 'description': 'Belize Blue', 'isLowStock': True,
            'images': [
                'resources/images/Productos/MINI GT/812 McLaren 750S Spider (Belize Blue)/812.jpg',
                'resources/images/Productos/MINI GT/812 McLaren 750S Spider (Belize Blue)/812-2.jpeg',
                'resources/images/Productos/MINI GT/812 McLaren 750S Spider (Belize Blue)/812-3.jpeg',
                'resources/images/Productos/MINI GT/812 McLaren 750S Spider (Belize Blue)/812-4.jpeg'
            ]
        },
        {
            'id': 850, 'category': 'mini-gt', 'name': 'Nissan Z GT500 #24', 'description': 'REALIZE CORPORATION ADVAN Z - KONDO RACING 2023 SUPER GT',
            'images': [
                'resources/images/Productos/MINI%20GT/850_Nissan_Z_GT500_24_REALIZE_CORPORTATION_ADVAN_Z_KONDO_RACING_2023_SUPER_GT_SERIES/850.jpeg',
                'resources/images/Productos/MINI%20GT/850_Nissan_Z_GT500_24_REALIZE_CORPORTATION_ADVAN_Z_KONDO_RACING_2023_SUPER_GT_SERIES/850-2.jpeg',
                'resources/images/Productos/MINI%20GT/850_Nissan_Z_GT500_24_REALIZE_CORPORTATION_ADVAN_Z_KONDO_RACING_2023_SUPER_GT_SERIES/850-3.jpeg',
                'resources/images/Productos/MINI%20GT/850_Nissan_Z_GT500_24_REALIZE_CORPORTATION_ADVAN_Z_KONDO_RACING_2023_SUPER_GT_SERIES/850-4.jpeg'
            ]
        },
        {
            'id': 857, 'category': 'mini-gt', 'name': 'Nissan Silvia (S15) D-MAX #46', 'description': 'D-MAX Racing 2023 D1 Grand Prix',
            'images': [
                'resources/images/Productos/MINI%20GT/857%20Nissan%20Silvia%20(S15)%20D-MAX%20%2346%20D-MAX%20Racing%202023%20D1%20Grand%20Prix/857.jpeg',
                'resources/images/Productos/MINI%20GT/857%20Nissan%20Silvia%20(S15)%20D-MAX%20%2346%20D-MAX%20Racing%202023%20D1%20Grand%20Prix/857-2.jpeg',
                'resources/images/Productos/MINI%20GT/857%20Nissan%20Silvia%20(S15)%20D-MAX%20%2346%20D-MAX%20Racing%202023%20D1%20Grand%20Prix/857-3.jpeg'
            ]
        },
        {
            'id': 860, 'category': 'mini-gt', 'name': 'Nissan GT-R NISMO GT3 #10', 'description': 'PONOS GAINER GT-R 2023 SUPER GT',
            'images': [
                'resources/images/Productos/MINI%20GT/860%20Nissan%20GT-R%20NISMO%20GT3%20%2310%20PONOS%20GAINER%20GT-R%202023%20SUPER%20GT%20SERIES/860.jpeg',
                'resources/images/Productos/MINI%20GT/860%20Nissan%20GT-R%20NISMO%20GT3%20%2310%20PONOS%20GAINER%20GT-R%202023%20SUPER%20GT%20SERIES/860-2.jpeg',
                'resources/images/Productos/MINI%20GT/860%20Nissan%20GT-R%20NISMO%20GT3%20%2310%20PONOS%20GAINER%20GT-R%202023%20SUPER%20GT%20SERIES/860-3.jpeg',
                'resources/images/Productos/MINI%20GT/860%20Nissan%20GT-R%20NISMO%20GT3%20%2310%20PONOS%20GAINER%20GT-R%202023%20SUPER%20GT%20SERIES/860-4.jpeg'
            ]
        },
        {
            'id': 869, 'category': 'mini-gt', 'name': 'Nissan Skyline GT-R R32', 'description': 'Gunmetal - Tsugio Matsuda Collection',
            'images': [
                'resources/images/Productos/MINI GT/869 Nissan Skyline GT-R R32 (Gunmetal) W: Matsuda Figure Tsugio Matsuda Collection/869.jpg',
                'resources/images/Productos/MINI GT/869 Nissan Skyline GT-R R32 (Gunmetal) W: Matsuda Figure Tsugio Matsuda Collection/869-2.jpeg',
                'resources/images/Productos/MINI GT/869 Nissan Skyline GT-R R32 (Gunmetal) W: Matsuda Figure Tsugio Matsuda Collection/869-3.jpeg',
                'resources/images/Productos/MINI GT/869 Nissan Skyline GT-R R32 (Gunmetal) W: Matsuda Figure Tsugio Matsuda Collection/869-4.jpeg'
            ]
        },
        {
            'id': 875, 'category': 'mini-gt', 'name': 'Nissan GT-R NISMO #23', 'description': 'MOTUL AUTECH GT-R 2021 SUPER GT - Tsugio Matsuda Collection',
            'images': [
                'resources/images/Productos/MINI%20GT/875%20Nissan%20GT-R%20NISMO%20%2323%20MOTUL%20AUTECH%20GT-R%202021%20SUPER%20GT%20SERIES%20Suzuka%20winner%20W%20Matsuda%20Figure%20Tsugio%20Matsuda%20Collection%20No.2/875.jpeg',
                'resources/images/Productos/MINI%20GT/875%20Nissan%20GT-R%20NISMO%20%2323%20MOTUL%20AUTECH%20GT-R%202021%20SUPER%20GT%20SERIES%20Suzuka%20winner%20W%20Matsuda%20Figure%20Tsugio%20Matsuda%20Collection%20No.2/875-2.jpeg'
            ]
        },
        {
            'id': 886, 'category': 'mini-gt', 'name': 'Lamborghini Revuelto', 'description': 'Giallo',
            'images': [
                'resources/images/Productos/MINI GT/886 Lamborghini Revuelto (Giallo)/886.jpg',
                'resources/images/Productos/MINI GT/886 Lamborghini Revuelto (Giallo)/886-2.jpeg',
                'resources/images/Productos/MINI GT/886 Lamborghini Revuelto (Giallo)/886-3.jpeg',
                'resources/images/Productos/MINI GT/886 Lamborghini Revuelto (Giallo)/886-4.jpeg'
            ]
        },
        {
            'id': 889, 'category': 'mini-gt', 'name': 'Porsche 911 GT3 R #77', 'description': 'AO Racing 2024 IMSA Daytona 24 Hrs GTD Pro 2nd Place', 'isNew': True,
            'images': [
                'resources/images/Productos/MINI%20GT/889%20Porsche%20911%20GT3%20R%20%2377%20AO%20Racing%202024%20IMSA%20Daytona%2024%20Hrs%20GTD%20Pro%202nd%20Place/889.jpeg',
                'resources/images/Productos/MINI%20GT/889%20Porsche%20911%20GT3%20R%20%2377%20AO%20Racing%202024%20IMSA%20Daytona%2024%20Hrs%20GTD%20Pro%202nd%20Place/889-2.jpeg',
                'resources/images/Productos/MINI%20GT/889%20Porsche%20911%20GT3%20R%20%2377%20AO%20Racing%202024%20IMSA%20Daytona%2024%20Hrs%20GTD%20Pro%202nd%20Place/889-3.jpeg',
                'resources/images/Productos/MINI%20GT/889%20Porsche%20911%20GT3%20R%20%2377%20AO%20Racing%202024%20IMSA%20Daytona%2024%20Hrs%20GTD%20Pro%202nd%20Place/889-4.jpeg'
            ]
        },
        {
            'id': 890, 'category': 'mini-gt', 'name': 'Bugatti EB110 Super Sport', 'description': 'Blu Bugatti',
            'images': [
                'resources/images/Productos/MINI GT/890 Bugatti EB110 Super Sport (Blu Bugatti)/890.jpg',
                'resources/images/Productos/MINI GT/890 Bugatti EB110 Super Sport (Blu Bugatti)/890-2.jpeg',
                'resources/images/Productos/MINI GT/890 Bugatti EB110 Super Sport (Blu Bugatti)/890-3.jpeg',
                'resources/images/Productos/MINI GT/890 Bugatti EB110 Super Sport (Blu Bugatti)/890-4.jpeg'
            ]
        },
        {
            'id': 953, 'category': 'mini-gt', 'name': 'Mazda AZ-1 Liberty Walk LB40', 'description': 'White - 2024 Tokyo Auto Salon',
            'images': [
                'resources/images/Productos/MINI%20GT/953%20Mazda%20AZ-1%20Liberty%20Walk%20LB40%20(White)%202024%20Tokyo%20Auto%20Salon/953.jpg',
                'resources/images/Productos/MINI%20GT/953%20Mazda%20AZ-1%20Liberty%20Walk%20LB40%20(White)%202024%20Tokyo%20Auto%20Salon/953-2.jpeg',
                'resources/images/Productos/MINI%20GT/953%20Mazda%20AZ-1%20Liberty%20Walk%20LB40%20(White)%202024%20Tokyo%20Auto%20Salon/953-3.jpeg',
                'resources/images/Productos/MINI%20GT/953%20Mazda%20AZ-1%20Liberty%20Walk%20LB40%20(White)%202024%20Tokyo%20Auto%20Salon/953-4.jpeg'
            ]
        },
        {
            'id': 963, 'category': 'mini-gt', 'name': 'LB-WORKS x Abas Works ABARTH 595', 'description': 'Red',
            'images': [
                'resources/images/Productos/MINI GT/963 LB-WORKS x Abas Works ABARTH 595 (Red)/963.jpeg',
                'resources/images/Productos/MINI GT/963 LB-WORKS x Abas Works ABARTH 595 (Red)/963-2.jpeg',
                'resources/images/Productos/MINI GT/963 LB-WORKS x Abas Works ABARTH 595 (Red)/963-3.jpeg',
                'resources/images/Productos/MINI GT/963 LB-WORKS x Abas Works ABARTH 595 (Red)/963-4.jpeg'
            ]
        },
        {
            'id': 964, 'category': 'mini-gt', 'name': 'Porsche 911 Dakar', 'description': 'Ice Grey Metallic - Rally 1978',
            'images': [
                'resources/images/Productos/MINI GT/964 Porsche 911 Dakar (Ice Grey Metallic) Rally 1978/964.jpeg',
                'resources/images/Productos/MINI GT/964 Porsche 911 Dakar (Ice Grey Metallic) Rally 1978/964-2.jpeg',
                'resources/images/Productos/MINI GT/964 Porsche 911 Dakar (Ice Grey Metallic) Rally 1978/964-3.jpeg',
                'resources/images/Productos/MINI GT/964 Porsche 911 Dakar (Ice Grey Metallic) Rally 1978/964-4.jpeg'
            ]
        },
        {
            'id': 2006, 'category': 'hot-wheels', 'name': 'Cadillac Project GTP Hypercar', 'description': 'Red', 'isLowStock': True,
            'images': ['resources/images/Productos/Hot Wheels/CADILLAC PROJECT GTP HYPERCAR:HYPERVOITURE – Red –.jpeg']
        },
        {
            'id': 2012, 'category': 'hot-wheels', 'name': 'Custom Kia EV6', 'description': 'Metalflake Teal',
            'images': ['resources/images/Productos/Hot Wheels/CUSTOM KIA EV6 – Metalflake Teal –.jpeg']
        },
        {
            'id': 2007, 'category': 'hot-wheels', 'name': 'Drift-Ender', 'description': 'Blue',
            'images': ['resources/images/Productos/Hot Wheels/DRIFT-ENDER – Blue –.jpeg']
        },
        {
            'id': 2008, 'category': 'hot-wheels', 'name': 'Ford Escort', 'description': 'Purple',
            'images': ['resources/images/Productos/Hot Wheels/FORD ESCORT – Purple .jpeg']
        },
        {
            'id': 2013, 'category': 'hot-wheels', 'name': 'King Kuda', 'description': 'Green',
            'images': ['resources/images/Productos/Hot Wheels/KING KUDA – Green – .jpeg']
        },
    ]

    for p in products_data:
        cursor.execute('''
            INSERT INTO products (id, category, name, description, isLowStock, isNew, isMostWanted)
            VALUES (?, ?, ?, ?, ?, ?, ?)
        ''', (p['id'], p['category'], p['name'], p['description'], p.get('isLowStock', 0), p.get('isNew', 0), p.get('isMostWanted', 0)))
        
        for img in p['images']:
            cursor.execute('''
                INSERT INTO product_images (product_id, image_url)
                VALUES (?, ?)
            ''', (p['id'], img))

    conn.commit()
    conn.close()
    print("Database initialized successfully.")

if __name__ == "__main__":
    init_db()

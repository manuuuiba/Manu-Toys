from flask import Flask, jsonify
from flask_cors import CORS
import sqlite3

app = Flask(__name__)
CORS(app)

def get_db_connection():
    conn = sqlite3.connect('database.sqlite')
    conn.row_factory = sqlite3.Row
    return conn

@app.route('/api/products', methods=['GET'])
def get_products():
    conn = get_db_connection()
    products_rows = conn.execute('SELECT * FROM products').fetchall()
    
    products = []
    for row in products_rows:
        product = dict(row)
        # Fetch images for this product
        images_rows = conn.execute('SELECT image_url FROM product_images WHERE product_id = ?', (product['id'],)).fetchall()
        product['images'] = [img['image_url'] for img in images_rows]
        
        # Convert 1/0 to True/False for compatibility with existing JS
        product['isLowStock'] = bool(product['isLowStock'])
        product['isNew'] = bool(product['isNew'])
        product['isMostWanted'] = bool(product['isMostWanted'])
        
        products.append(product)
        
    conn.close()
    return jsonify(products)

if __name__ == '__main__':
    app.run(debug=True, port=5000)

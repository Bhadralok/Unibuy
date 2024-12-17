export default function Cart() {
    const data = [
        {
          "id": 1,
          "name": "Wireless Bluetooth Headphones",
          "price": 59.99,
          "quantity": 2,
          "image": "https://example.com/images/headphones.jpg"
        },
        {
          "id": 2,
          "name": "Smartphone Case",
          "price": 19.99,
          "quantity": 1,
          "image": "https://example.com/images/phone-case.jpg"
        },
        {
          "id": 3,
          "name": "USB-C Charger Cable",
          "price": 9.99,
          "quantity": 3,
          "image": "https://example.com/images/charger-cable.jpg"
        },
        {
          "id": 4,
          "name": "Ergonomic Office Chair",
          "price": 199.99,
          "quantity": 1,
          "image": "https://example.com/images/office-chair.jpg"
        },
        {
          "id": 5,
          "name": "Gaming Mouse",
          "price": 49.99,
          "quantity": 1,
          "image": "https://example.com/images/gaming-mouse.jpg"
        },
        {
          "id": 6,
          "name": "Mechanical Keyboard",
          "price": 89.99,
          "quantity": 1,
          "image": "https://example.com/images/mechanical-keyboard.jpg"
        },
        {
          "id": 7,
          "name": "Stainless Steel Water Bottle",
          "price": 24.99,
          "quantity": 2,
          "image": "https://example.com/images/water-bottle.jpg"
        },
        {
          "id": 8,
          "name": "Wireless Phone Charger",
          "price": 29.99,
          "quantity": 1,
          "image": "https://example.com/images/phone-charger.jpg"
        }
      ]
      
  return <div>
    {data.map(item => <li key={item.id}>{item.name}</li>)}
  </div>;
}

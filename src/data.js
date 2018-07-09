const data = {
  user: {
    id: 'Ux1234',
    firstName: 'Bhavan',
    lastName: 'Sharma',
    phone: '+91 8106443911',
    email: 'bhavanvitu@gmail.com',
    addresses: [
      {
        id: 1,
        recepientName: 'pallavi omar',
        flat: '103',
        phone: 9718940223,
        street: 'palkalai nagar',
        area: 'palavakkam',
        landmark: 'Mudialiar Hgr. Sec. School',
        city: 'Chennai',
        pinCode: '600041',
        state: 'Tamilnadu'
      },
      {
        id: 2,
        recepientName: 'Bhavan K',
        phone: 8106443911,
        flat: '602',
        street: 'DLF Gardencity',
        area: 'Semmencheri',
        landmark: 'satyabhama university',
        city: 'Chennai',
        pinCode: '600130',
        state: 'Tamilnadu'
      },
      {
        id: 3,
        recepientName: 'pallavi omar',
        flat: '58/3',
        street: 'site no.1',
        phone: 9088898787,
        area: 'kidwai nagar',
        landmark: 'hamuman temple',
        city: 'Kanpur',
        pinCode: '208011',
        state: 'Uttar Pradesh'
      }
    ]
  },
  order: {
    cart: [
      {
        id: 1,
        count: 1,
        title: 'oneplus 6',
        img: '/prod-1.jpg',
        price: 39999
      },
      {
        id: 2,
        count: 1,
        title: 'Samsung galaxy S9 Plus',
        img: '/prod-2.jpg',
        price: 64990
      },
      {
        id: 3,
        count: 1,
        title: 'Apple Iphone X',
        img: '/prod-3.jpg',
        price: 104900
      },
      {
        id: 4,
        count: 1,
        title: 'LG G7 ThinQ',
        img: '/prod-4.png',
        price: 54000
      }
    ]
  }
};

export default data;

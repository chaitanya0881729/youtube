import React, { useState } from 'react';

const App = () => {
    const [iphones] = useState([
        {
            title: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit iphone-1',
            text: 'lorem 18-01-2024',
            Views: 293,
            image: 'https://picsum.photos/id/1015/200/120', 
        },
        {
            title: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit iphone-2',
            text: 'lorem 18-01-2024',
            Views: 233,
            image: 'https://picsum.photos/id/1016/200/120',
        },
        {
            title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit iphone-3',
            text: 'lorem 18-01-2024',
            Views: 265,
            image: 'https://picsum.photos/id/1018/200/120',
        },
        {
            title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit iphone-4',
            text: 'lorem 18-01-2024',
            Views: 733,
            image: 'https://picsum.photos/id/1020/200/120',
        },
        {
            title: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit iphone-5',
            text: 'lorem 18-01-2024',
            Views: 463,
            image: 'https://picsum.photos/id/1022/200/120',
        },
    ]);

    const [airpods] = useState([
        {
            title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit airpods-1',
            text: 'lorem 18-01-2024',
            Views: 350,
            image: 'https://picsum.photos/id/1025/200/120',
        },
        {
            title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit airpods-2',
            text: 'lorem 18-01-2024',
            Views: 670,
            image: 'https://picsum.photos/id/1026/200/120',
        },
        
        
        {
            title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit airpods-3',
            text: 'lorem 18-01-2024',
            Views: 850,
            image: 'https://picsum.photos/id/1026/200/120',
        },
        {
            title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit airpods-4',
            text: 'lorem 18-01-2024',
            Views: 170,
            image: 'https://picsum.photos/id/1028/200/120',
        },
        {
            title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit airpods-5',
            text: 'lorem 18-01-2024',
            Views: 190,
            image: 'https://picsum.photos/id/1029/200/120',
        },
        
    ]);

    return (
        <div>
            <Views iphones={iphones} airpods={airpods} />
        </div>
    );
};

const Views = ({ iphones, airpods }) => {
    

    return (
        <div>
            <section className='container  '>
              
              <div className='card-container'>

              <h3 className='card-title'>Top 10 Videos by Views</h3>



              <div className='card-box'>


<div className='viewbox1'>
    <h3>Iphone</h3>
    <div className='cards'>
        {iphones.map((iphone, i) => (
            <div className='cardline' key={i}>
                <img src={iphone.image} alt={iphone.title} />
                <div className='card-content'>
                <h4>{iphone.title}</h4>
                <p>{iphone.text}</p>
                </div>
               
                <p className='views-container'>{iphone.Views}</p>
            </div>
        ))}
    </div>
</div>
<div className='viewbox2'>
    <h3>Airpods</h3>
    <div className='cards'>
        {airpods.map((airpod, i) => (
            <div className='cardline' key={i}>
                <img src={airpod.image} alt={airpod.title} />

                <div className='card-content'>
                <h4>{airpod.title}</h4>
                <p>{airpod.text}</p>
                </div>

                <p className='views-container'> {airpod.Views}</p>
            </div>
        ))}
    </div>
</div>
</div>

              </div>



            </section>
        </div>
    );
};

export default App;

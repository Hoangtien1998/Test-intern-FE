import React, { useState } from 'react';
import { ListProducts } from '../../shared/listData';
import './css.scss';

export default function Home() {
    const [listProducts] = useState(ListProducts);
    return (
        <div className="_Wht30s_main">
            <div className="home">
                <img className="img1" src="assets/main-banner_2021-10-10/main-banner.png" alt="main-banner" />
                <div className="img2">
                    <img src="assets/main-banner_2021-10-10/introduction-bg.png" alt="introduction-bg" />
                    <span className="What-Happened"> What Happened! </span>
                    <span className="how-to">
                        How to create mobile-optimized videos in minutes. Not a designer,
                        every team makes a lot of videos Can be trimmed. Take the first
                        step to your brand's success. How to create
                        mobile-optimized videos in minutes.
                    </span>
                </div>
                <div className="img3" style={{ backgroundImage: 'url(assets/main-banner_2021-10-10/bes-bg.png)' }}>
                    <div className="content" >
                        <span className="Best-Product Text-Style-5">
                            Best Product
                        </span>
                        <span class="how-to2">
                            How to create mobile-optimized videos in minutes. Not a designer,
                            every team makes a lot of videos Can be trimmed. Take the first
                        </span>
                    </div>
                    <div style={{ width: '100%', height: '60%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <div style={{ position: 'relative' }}>
                            <div className="box" style={{ backgroundColor: '#fff', width: '369px', height: '79px', border: '5px solid', position: 'absolute', bottom: '-6%', left: '15%', fontSize: '27px' }}>
                                How to create
                                mobile-optimized
                            </div>
                            <img style={{ position: 'absolute', bottom: '-4%', right: '17%' }} src="assets/main-banner_2021-10-10/go-icon.png" alt="go-icon" />
                            <img style={{ position: 'absolute', top: '-10%' }} src="assets/main-banner_2021-10-10/producticon-01.png" alt="producticon-01" />
                            <img src="assets/main-banner_2021-10-10/best-image-01.png" alt="best-image-01" />
                        </div>
                        <div style={{ position: 'relative' }}>
                            <div className="box" style={{ backgroundColor: '#fff', width: '369px', height: '79px', border: '5px solid', position: 'absolute', bottom: '-6%', left: '15%', fontSize: '27px' }}>
                                How to create
                                mobile-optimized
                            </div>
                            <img style={{ position: 'absolute', bottom: '-4%', right: '17%' }} src="assets/main-banner_2021-10-10/go-icon.png" alt="go-icon" />
                            <img style={{ position: 'absolute', top: '-10%' }} src="assets/main-banner_2021-10-10/producticon-02.png" alt="producticon-02" />
                            <img src="assets/main-banner_2021-10-10/best-image-02.png" alt="best-image-02" />
                        </div>
                        <div style={{ position: 'relative' }}>
                            <div className="box" style={{ backgroundColor: '#fff', width: '369px', height: '79px', border: '5px solid', position: 'absolute', bottom: '-6%', left: '15%', fontSize: '27px' }}>
                                How to create
                                mobile-optimized
                            </div>
                            <img style={{ position: 'absolute', bottom: '-4%', right: '17%' }} src="assets/main-banner_2021-10-10/go-icon.png" alt="go-icon" />
                            <img style={{ position: 'absolute', top: '-10%' }} src="assets/main-banner_2021-10-10/producticon-03.png" alt="producticon-03" />
                            <img src="assets/main-banner_2021-10-10/best-image-03.png" alt="best-image-03" />
                        </div>
                    </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', width: '100%' }}>
                    {
                        listProducts.map((product) => (
                            <div key={product.id} style={{ width: '15%', height: '100%', display: 'flex', flexWrap: 'wrap', flexDirection: 'column', padding: '50px 50px 50px 50px' }}>
                                <img src={product.img} />
                                <div>{product.name}</div>
                                <div>{product.price}</div>
                                <div style={{ flexDirection: 'Row' }}>{product.rate}</div>
                            </div>
                        ))
                    }
                    <button style={{ height: '50px', width: '200px', fontSize: '20px', border: '4px solid' }}>SEE MORE</button>
                </div>
            </div>
        </div >
    )
}

import React, { useState } from 'react';

const Banner = () => {
    const [edit, setEdit] = useState(false);
    const bannerList = ['ban0.jpg', 'ban1.jpg', 'ban2.jpg', 'ban3.jpg','ban4.jpg'];
    const [selectedBanner, SetSelectedBanner] = useState(bannerList[0]);
    const selectBanner = (image) => {
        SetSelectedBanner(image);
    }
    const saveBannerImage = () => {
        setEdit(false);
    }
    return (
        <>
            <div>
                <div className='banner-block'>
                    <img className='banner-img' src={`./Images/${selectedBanner}`} alt='banner' />
                    <button className='banner_edit_button' onClick={() => setEdit(true)}> Edit</button>
                </div>
                {edit &&
                    <div>
                        <div className='banner-overlay'></div>
                        <div className='banner-list'>
                            {bannerList.map((image) => (
                                <div onClick={() => selectBanner(image)}><img className='sub-img' src={`./Images/${image}`} alt='' /></div>
                            ))}
                            <button onClick={saveBannerImage}>Save</button>
                        </div>

                    </div>

                }
            </div>

        </>
    )
            }
export default Banner;
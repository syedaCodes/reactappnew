import React from 'react';
import Icons from '../../../../assets/sprite.svg';

const SecLeftBottom = () => {
    
    const onChangeHandler = ({ name, value }) => {

    }

  return (
    <div className="hero__left--bottom">
        <form className="get-access">
            <input type="email" placeholder="Enter your email address" name="email" value="" onChange={onChangeHandler}/>
            <button type="submit" className="btn-all get-access-btn">Get access</button>
        </form>

        <ul className="hero__left--bottom--ul">
            <li>
                <svg className="svg-icons">
                    <use xlinkHref={`${Icons}#icon-check`}></use>
                </svg>
                <p className="inline-a">Work anywhere</p>
            </li>

            <li>
                <svg className="svg-icons">
                    <use xlinkHref={`${Icons}#icon-check`}></use>
                </svg>
                <p className="inline-a">Get rewarded</p>
            </li>

            <li>
                <svg className="svg-icons">
                    <use xlinkHref={`${Icons}#icon-check`}></use>
                </svg>
                <p className="inline-a">No hidden fee</p>
            </li>
        </ul>
    </div>
  )
}

export default SecLeftBottom;
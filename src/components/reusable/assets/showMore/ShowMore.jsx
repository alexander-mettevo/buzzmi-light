import React, {useRef, useState} from 'react';
import Checkbox from "./Checkbox.jsx";
import PrimaryButton from "../../btns/buttons/PrimaryButton.jsx";
import {Link} from "react-router-dom";

export const HardCode = () => {
  return (
    <ul className={'show-more__list list-show'}>
      <li>
        <Checkbox/>
        <div>
          <div className='list-show__title'>Premium-Only Content</div>
          <div className='list-show__text'>Access to Exclusive Content from Hundreds of Independent Creators</div>
        </div>
      </li>
      <li>
        <Checkbox/>
        <div>
          <div className='list-show__title'>Premium-Only Content</div>
          <div className='list-show__text'>Participate in Premium-Member-Only Challenges and Contests to Win Rewards
          </div>
        </div>

      </li>
      <li>
        <Checkbox/>
        <div>
          <div className='list-show__title'>Double Rewards</div>
          <div className='list-show__text'>Get 2x Buzzcoin for Participating in Challenges and Contests</div>
        </div>

      </li>
      <li>
        <Checkbox/>
        <div>
          <div className='list-show__title'>Premium Tools</div>
          <div className='list-show__text'>Access to Premium Tools for Personal Growth, Wellness, and Productivity</div>
        </div>

      </li>
      <li>
        <Checkbox/>
        <div>
          <div className='list-show__title'>Exclusive Deals and Offers</div>
          <div className='list-show__text'>Access to Exclusive Content, Offers, and Deals</div>
        </div>

      </li>
      <li>
        <Checkbox/>
        <div>
          <div className='list-show__title'>Premium-Member Badge</div>
          <div className='list-show__text'>Exclusive Premium-Member Badge to Stand Out in the Community.</div>
        </div>

      </li>
      <li>
        <Link to='/sale/subscribe'>
          <PrimaryButton className=''>Subscribe</PrimaryButton>
        </Link>
      </li>
    </ul>
  )
}

const ShowMore = ({text, content}) => {
  const [showMore, setShowMore] = useState(false);
  const contentRef = useRef(null);

  const handleShowMore = () => setShowMore(!showMore);

  return (
    <div className='show-more text-secondary text-r'>
      <div>{text}</div>
      <div className={`show-more__wrap-btn mb-3 text-left ${showMore ? 'show-more__wrap-btn_a' : ''}`}>
        {
          !showMore && (
            <div className='d-flex justify-content-between '>
              <a href={'/'} className='show-more__subscribe-now'>
                Subscribe now
              </a>
              <button className={`text-primary  show-more__btn-show show-more__btn_a`}
                      onClick={handleShowMore}>Learn more
              </button>
            </div>
          )
        }
        <button className={`show-more__btn-hide text-alt-primary ${showMore ? 'show-more__btn_a' : ''}`} onClick={handleShowMore}>
          Close
        </button>
      </div>

      <div
        ref={contentRef}
        className={`show-more__content ${showMore ? 'show-more__content_a' : ''}`}
        style={{maxHeight: showMore ? `${contentRef.current.scrollHeight}px` : 0}}
      >
        {content}
      </div>
    </div>
  )
};

export default ShowMore;
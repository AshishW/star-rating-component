// StarRatingComponent.js

// StarRatingComponent.js

// verifying the requirements

/*
que: Are the number of stars fixed or flexible?
ans: assume that its fixed for now/assume it to be flexible in the future

que: Is there a hover state? and if yes, what do you want the hover state to do?
ans: assume the stars are initially unselected. if you hover over star 2, the stars one and two will be highlighted. If you hover or star 4 then all 1-4 will be highlighted. If 4 stars are selected(by clicking on 4th star) and if you hover over 3 stars, star 1 - star 3 are highlighted.

que: Can you reset the star rating? (meaning that if you have 4 stars selected, is there a way to make it to default where no stars are selected?)
ans: Yes assume you can reset the star rating. if you click on same value which you already selected again then it will reset to default value
*/
import { useEffect, useState, useCallback } from "react"
import './star-rating-component.css'

const StarRating = ({maxRating=5, onChange}) =>{
  const [currRating, setCurrRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);


  useEffect(()=>{
    onChange(currRating)
  }, [currRating])

  
  const handleClick = useCallback((ratingValue) =>{
    if(currRating === ratingValue){
        setCurrRating(0)
    }else{
        setCurrRating(ratingValue)
    }
  },[currRating])



  return (
    <div className = 'star-rating-container'>
    {
      [...Array(maxRating)].map((_,idx)=>{
        const ratingValue = idx + 1 
        return <p className={`star ${ratingValue <= (hoveredRating || currRating)? 'active': ''}`}
            key={idx} 
            onClick = {()=>handleClick(ratingValue)}
            onMouseEnter={()=>setHoveredRating(ratingValue)}
            onMouseLeave={()=>setHoveredRating(0)}
            >
                {/* {ratingValue} */}
                &#9733; {/*star symbol */}
            </p>
      })
    }
    </div>
  )
}

export default StarRating;
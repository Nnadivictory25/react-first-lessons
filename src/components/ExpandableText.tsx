import { useState } from "react";

interface Props {
    children: string;
    maxChars?: number;
    onShowMore: () => void;
    onShowLess: () => void;
}

const ExpandableText = ({ children, maxChars = 100, onShowMore, onShowLess }: Props) => {
    
    const [expanded, setExpanded] = useState(false);

    const renderText = () => {
      
      if (children.length <= maxChars || expanded) {
        return <p>{children}</p>;
      } else {
        return (
          <p>
            {children.slice(0, maxChars) + "..."}
          </p>
        )
      }
    }
      
    const handleShowMore = () => { 
      setExpanded(true)
      onShowMore()
    }
      
    const handleShowLess = () => { 
      setExpanded(false)
      onShowLess()
    }
    return (
      <div>
        {renderText()}
        {!expanded ?
          <button onClick={handleShowMore}>Show more</button> :
          <button onClick={handleShowLess}>Show less</button>
        }
      </div>
    )
}

export default ExpandableText
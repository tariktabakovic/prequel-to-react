// 1. Import React
import React from 'react';
import Card from './card'
// 2. Create Function
function Greet({whom}){
    
    const greetingText = `Hello, ${whom}`
    // React function always return a single value written as HTML
    return(
        <div>
            <Card text={greetingText}/>
        </div>
        // <p> Hello, {whom} </p>
    );
}

// 3. Export It
export default Greet;
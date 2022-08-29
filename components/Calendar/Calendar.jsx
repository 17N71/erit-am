import React, {useState} from 'react';
function Calendar(props) {
    const [value, onChange] = useState(new Date());
    return  (
        <>
        <Calendar onChange={onChange} value={value} />
        </>
    )
}
export default Calendar;
import { useNavigate } from 'react-router-dom';
function Pomo(){
    const navigate = useNavigate();
    const handleShortClick = () => {
        navigate('/short'); // Redirect to the stopwatch page
    };
    const handleLongClick = () => {
        navigate('/long'); // Redirect to the stopwatch page
    };
    return(
        <div className="pomodo">
            <button className="shawt" onClick={handleShortClick}>Short Break</button>
            <button className="long" onClick={handleLongClick}>Long Break</button>
        </div>
    );
}
export default Pomo
import {getDate} from "../utils/date.ts";
import SettingsIcon from '@mui/icons-material/Settings';

const Header = () => {
    const date = getDate();

    return (
        <div className="w-full h-fit flex justify-between items-center px-6">
            <div className="flex flex-col h-full">
                <p className="text-xl font-semibold">{date.greetings}</p>
                <p>{`${date.dayOfWeak}, ${date.day} ${date.month}`}</p>
            </div>
            <div>
                <button>
                    <SettingsIcon/>
                </button>
            </div>
        </div>
    );
};

export default Header;
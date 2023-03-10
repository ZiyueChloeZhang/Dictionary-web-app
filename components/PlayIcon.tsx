import { on } from "events";
import { FC, useContext } from "react";
const PlayIcon: FC<{ audioUrl: string | undefined }> = ({ audioUrl }) => {

    const playAudio = () => {
        new Audio(audioUrl).play();
    }

    return (
        <div onClick={playAudio}>
            <svg className="group cursor-pointer mobile:w-[48px] tablet:w-[75px]" xmlns="http://www.w3.org/2000/svg" width="75" height="75" viewBox="0 0 75 75">
                <g fill="#A445ED" fill-rule="evenodd">
                    <circle className="opacity-25 group-hover:opacity-100" cx="37.5" cy="37.5" r="37.5" />
                    <path className="group-hover:fill-white" d="M29 27v21l21-10.5z" />
                </g>
            </svg>
        </div>
    );

}
export default PlayIcon;
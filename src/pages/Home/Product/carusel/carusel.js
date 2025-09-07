import './carusel.css';
import {useEffect, useState, Children, cloneElement} from "react";
import {FaChevronLeft, FaChevronRight} from "react-icons/fa";

export const Carousel = ({children}) => {
    const [pages, setPages] = useState([]);
    const [offset, setOffset] = useState(0);

    const col = 355;

    const handleArrowClickLeft = () => {
        console.log('handleArrowClickLeft');
        setOffset((currentOffset) => {
            const newOffset = currentOffset + col;
            console.log(newOffset);
            return Math.min(newOffset, 0);
        });
    };

    const handleArrowClickRight = () => {
        console.log('handleArrowClickRight');
        setOffset((currentOffset) => {
            const newOffset = currentOffset - col;
            const maxOffset = -(col * (pages.length - 1));

            console.log(newOffset, maxOffset);

            return Math.max(newOffset, maxOffset);
        });
    };

    useEffect(() => {
        setPages(
            Children.map(children, child => {
                return cloneElement(child, {
                    style: {
                        height: '100%',
                        minWidth: '600px',
                        maxWidth: '600px',
                    },
                });
            })
        );
    }, [children]);

    return (
        <div className='main-container'>
            <FaChevronLeft cursor='pointer' onClick={handleArrowClickLeft}/>
            <div className='window'>
                <div className='all-pages-container' style={{
                    transform: `translateX(${offset}px)`
                }}>
                    {pages}
                </div>
            </div>
            <FaChevronRight cursor='pointer' onClick={handleArrowClickRight}/>
        </div>
    );
};

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem, removeItem } from '../utils/CartSlice';
import { IMG_CDN_URL } from '../config';

const MenuCard = ({ ItemDetails }) => {
    const { imageId, name, defaultPrice, price, description, itemAttribute, id } = ItemDetails;
    const [count, setCount] = useState({});
    const dispatch = useDispatch();

    const addFoodItem = (ItemDetails) => {
        dispatch(addItem(ItemDetails));
    };

    const removeFoodItem = (ItemDetails) => {
        dispatch(removeItem(ItemDetails));
    };

    const increamentCount = (id) => {
        setCount((prevCounts) => ({
            ...prevCounts,
            [id]: (prevCounts[id] || 0) + 1
        }));
    };

    const decreamentCount = (id) => {
        setCount((prevCounts) => ({
            ...prevCounts,
            [id]: Math.max((prevCounts[id] || 0) - 1, 0)
        }));
    };

    return (
        <div>
            <div className='flex justify-between'>
                <div>
                    <div>
                        <h3 className='text-sm mr-1 sm:text-base font-medium text-[#3e4152] break-words'>{name}</h3>
                    </div>
                    <div>
                        <span className='mr-2 font-normal text-[#3e4152] text-sm'>Rs {(defaultPrice / 100) || (price / 100)}</span>
                    </div>
                    <div className='mt-3 text-[#282c3f73] text-sm overflow-x-auto max-w-md md:max-w-xl'>{description}</div>
                </div>
                <div className='relative'>
                    <img src={IMG_CDN_URL + imageId} className='h-24 w-[118px] border border-[#d4d5d9] rounded-lg shadow-md' alt="menuItem" />
                    <div className='absolute inset-0 left-1/2 top-20 -translate-x-1/2 grid item-center w-20 md:w-24 h-9 rounded-lg text-sm font-semibold bg-white text-center border shadow-md'>
                        {
                            count[id] > 0 ? (
                                <div className='flex justify-between items-center'>
                                    <button
                                        data-testid="removeBtn"
                                        className="text-[#60b246] cursor-pointer px-4"
                                        onClick={() => {
                                            removeFoodItem(ItemDetails);
                                            decreamentCount(id); // Call decreamentCount when removing an item
                                        }}
                                    >
                                        -
                                    </button>
                                    <span>{count[id]}</span> {/* Display count[id] */}
                                    <button
                                        data-testid="addBtn"
                                        className="text-[#60b246] cursor-pointer px-4"
                                        onClick={() => {
                                            addFoodItem(ItemDetails);
                                            increamentCount(id); // Call increamentCount when adding an item
                                        }}
                                    >
                                        +
                                    </button>
                                </div>
                            ) : (
                                <button
                                    data-testid="addBtn"
                                    className="text-[#60b246] w-full cursor-pointer"
                                    onClick={() => {
                                        addFoodItem(ItemDetails);
                                        increamentCount(id); // Call increamentCount when adding an item
                                    }}
                                >
                                    Add
                                </button>
                            )
                        }



                    </div>
                </div>
            </div>
            <div className='border-b my-5'></div>
        </div>
    );
};

export default MenuCard;

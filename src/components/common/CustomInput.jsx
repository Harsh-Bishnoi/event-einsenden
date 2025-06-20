import React from 'react'

const CustomInput = ({ placeholder, inputClass, type }) => {
    return (
        <input className={`sm:max-w-[371.5px] input-placeholder w-full outline-[#222222]/50 ff-open rounded-[30px] border-[0.5px] border-[#D1E0E9] bg-white px-4 py-[16.5px] font-bold text-sm leading-[150%] text-[#737376] tracking-[-0.16px] ${inputClass}`} type={type} placeholder={placeholder} required />
    )
}

export default CustomInput
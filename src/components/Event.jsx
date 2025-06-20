import React, { useState } from "react";
import CustomInput from './common/CustomInput'
import { ArrowIcon } from '../utils/Icons'

const Event = () => {
    const [imgPreview, setImgPreview] = useState([]);

    const handleFileChange = (e) => {
        const files = Array.from(e.target.files);
        const objectUrls = files.map((file) => URL.createObjectURL(file));
        setImgPreview((prev) => [...prev, ...objectUrls]);
    };

    const removeImage = (i) => {
        const updated = [...imgPreview];
        updated.splice(i, 1);
        setImgPreview(updated);
    };

    const initialValues = {
        Kategorie: "",
        titel: "",
        datum: "",
        standort: "",
        preis: "",
        details: ""
    }

    const [inputValue, setInputValue] = useState(initialValues);

    const handelSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", inputValue);
        setInputValue(initialValues);
    };

    return (
        <>
            <div className="flex justify-center items-center px-3 py-15">
                <div className="max-w-[768px] mx-auto">
                    <h1 className='ff-open font-bold text-4xl leading-11 text-center text-[#222222] tracking-[-0.32px] pb-5'>Event einsenden</h1>
                    <p className='ff-open text-center font-light text-[20px] text-[#737376] leading-7.5 pb-5'>At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                    <div className="w-full max-w-[763px] px-4 py-2 bg-white border-2 border-dashed border-[#D1E0E9] rounded-[30px]">
                        <input
                            id="fileUpload"
                            type="file"
                            accept="image/*"
                            onChange={handleFileChange}
                            multiple
                            className="hidden"
                        />

                        <div className="gap-4 flex overflow-x-auto items-center">
                            {imgPreview.map((src, i) => (
                                <div key={i} className="relative w-[96px] h-[96px]">
                                    <img
                                        src={src}
                                        className="w-full h-full rounded-[20px] object-cover"
                                    />
                                    <button
                                        onClick={() => removeImage(i)}
                                        className="absolute top-0 right-0 bg-red-500 cursor-pointer text-white rounded-full w-4 h-4 flex items-center justify-center text-sm hover:bg-red-600"
                                        title="Remove image"
                                    >
                                        ×
                                    </button>
                                </div>
                            ))}

                            <label
                                htmlFor="fileUpload"
                                className="min-w-[96px] outline-0 h-[80px] min-h-[80px] rounded-[20px] border-2 border-dashed border-[#D4D4D4] flex items-center justify-center text-3xl text-[#007AFF] cursor-pointer font-bold hover:bg-[#f0f8ff] transition-all"
                            >
                                +
                            </label>
                        </div>
                    </div>

                    <form className='mt-5' onSubmit={handelSubmit}>
                        <div className="flex max-w-[763px] border-[0.5px] w-full border-[#D1E0E9] rounded-[30px] px-4 bg-white mb-5 py-[16.5px] relative">
                            <select
                                value={inputValue.Kategorie}
                                name="kategorie"
                                onChange={(e) => setInputValue({ ...inputValue, Kategorie: e.target.value })}
                                className='w-full outline-0 cursor-pointer ff-open font-bold text-sm leading-[150%] tracking-[-0.16px] text-[#737376] '>
                                <option className='cursor-pointer ff-open font-semibold text-sm leading-[150%] tracking-[-0.16px] text-[#737376]' >Kategorie</option>
                                <option className='cursor-pointer ff-open font-semibold text-sm leading-[150%] tracking-[-0.16px] text-[#737376]' >option-1</option>
                                <option className='cursor-pointer ff-open font-semibold text-sm leading-[150%] tracking-[-0.16px] text-[#737376]' >option-2</option>
                                <option className='cursor-pointer ff-open font-semibold text-sm leading-[150%] tracking-[-0.16px] text-[#737376]' >option-3</option>
                                <option className='cursor-pointer ff-open font-semibold text-sm leading-[150%] tracking-[-0.16px] text-[#737376]' >option-4</option>
                            </select>
                            <div className="absolute right-[11px] top-[13px]">
                                <ArrowIcon />
                            </div>
                        </div>
                        <div className="flex flex-col sm:flex-row items-center gap-5 justify-center mb-5 max-w-[763px]">
                            <CustomInput
                                name="titel"
                                value={inputValue.titel}
                                type={"text"}
                                placeholder={"Titel"}
                                onChange={(e) => setInputValue({ ...inputValue, titel: e.target.value })} />

                            <CustomInput
                                name="datum"
                                value={inputValue.datum}
                                type={"text"}
                                placeholder={"Datum"}
                                onChange={(e) => setInputValue({ ...inputValue, datum: e.target.value })} />
                        </div>
                        <div className="flex flex-col sm:flex-row items-center gap-5 justify-center mb-5 max-w-[763px]">
                            <CustomInput
                                name="standort"
                                value={inputValue.standort}
                                type={"text"}
                                placeholder={"Standort"}
                                onChange={(e) => setInputValue({ ...inputValue, standort: e.target.value })} />

                            <CustomInput
                                name="preis"
                                value={inputValue.preis}
                                type={"text"}
                                placeholder={"Preis"}
                                onChange={(e) => setInputValue({ ...inputValue, preis: e.target.value })} />
                        </div>
                        <textarea name='details' value={inputValue.details} onChange={(e) => setInputValue({ ...inputValue, details: e.target.value })} className='w-full max-h-[132px] min-h-[132px] input-placeholder max-w-[763px] mb-5 border-[0.5px] outline-[#222222]/50 border-[#D1E0E9] bg-white rounded-[30px] px-4 py-[53px] flex items-center font-bold text-sm leading-[150%] text-[#737376] tracking-[-0.16px]' placeholder='Details zur Veranstaltung' ></textarea>
                        <button type='submit' className='ff-open leading-[150%] font-bold tracking-[-0.16px] text-white rounded-[30px] py-4 px-[90px] cursor-pointer sm:px-[115.8px] flex justify-center mx-auto hover:text-black transition-all duration-200 ease-linear' style={{
                            background:
                                "linear-gradient(80.25deg, #0071BB 0.38%, #39A3E7 98.6%)",
                        }}>Event einsenden</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Event
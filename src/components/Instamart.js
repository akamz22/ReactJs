import React, { useState } from "react";
const Section = ({ title, description , isVisible,setIsVisible }) => {
    return (
        <div className=" border border-black p-4 m-4">
            <h1 className="font-bold text-xl">{title}</h1>
            {
                isVisible ? <button className="cursor-pointer underline" onClick={() => setIsVisible(false)}>Hide</button> 
                : <button className="cursor-pointer underline" onClick={() => setIsVisible(true)}>Show</button>
            }
            {
                isVisible && <h2>{description}</h2>
            }
        </div>
    ) 
}

const Instamart = () => {
    const [visibleSection , setVisibleSection] = useState("")
    return (
        <div>
            <h1 className="text-3xl p-2 m-2 font-bold">Instamart</h1>
            <Section
                isVisible={visibleSection==="about"}
                setIsVisible={()=>setVisibleSection("about")}
                title={"Instamart About"}
                description={"This is about section of InstaMart, Swiggy has over 20 million monthly users and does 1.5 million orders a day as of June 2021. Its orders have grown 2.5 times, while revenue has grown 2.8 times from June 2020 to June 2021.Based on the insight that households order a limited subset of products every day, Swiggy Instamart promises to deliver your order within 45 minutes, from 7 am to 1 am.The marketplace business aggregated with local Kirana stores from where users could get grocery, fresh produce, essential products, and food items delivered through Swiggy’s delivery fleet.The company also has a slew of specialized services under its stores business such as meat and seafood, pet care, etc."}
            />
            <Section
                isVisible={visibleSection=="team"}
                setIsVisible={()=> setVisibleSection("team")}
                title={"Instamart Team"}
                description={"Swiggy has over 20 million monthly users and does 1.5 million orders a day as of June 2021. Its orders have grown 2.5 times, while revenue has grown 2.8 times from June 2020 to June 2021.Based on the insight that households order a limited subset of products every day, Swiggy Instamart promises to deliver your order within 45 minutes, from 7 am to 1 am.The marketplace business aggregated with local Kirana stores from where users could get grocery, fresh produce, essential products, and food items delivered through Swiggy’s delivery fleet.The company also has a slew of specialized services under its stores business such as meat and seafood, pet care, etc."}
            />
            <Section
                isVisible={visibleSection=="career"}
                setIsVisible={()=>setVisibleSection("career")}
                title={"InstaMart Career"}
                description={"Swiggy has over 20 million monthly users and does 1.5 million orders a day as of June 2021. Its orders have grown 2.5 times, while revenue has grown 2.8 times from June 2020 to June 2021.Based on the insight that households order a limited subset of products every day, Swiggy Instamart promises to deliver your order within 45 minutes, from 7 am to 1 am.The marketplace business aggregated with local Kirana stores from where users could get grocery, fresh produce, essential products, and food items delivered through Swiggy’s delivery fleet.The company also has a slew of specialized services under its stores business such as meat and seafood, pet care, etc."}
            />
            <Section
                isVisible={visibleSection=="product"}
                setIsVisible={()=>setVisibleSection("product")}
                title={"InstaMart Product"}
                description={"Swiggy has over 20 million monthly users and does 1.5 million orders a day as of June 2021. Its orders have grown 2.5 times, while revenue has grown 2.8 times from June 2020 to June 2021.Based on the insight that households order a limited subset of products every day, Swiggy Instamart promises to deliver your order within 45 minutes, from 7 am to 1 am.The marketplace business aggregated with local Kirana stores from where users could get grocery, fresh produce, essential products, and food items delivered through Swiggy’s delivery fleet.The company also has a slew of specialized services under its stores business such as meat and seafood, pet care, etc."}
            />
            <Section
                isVisible={visibleSection=="details"}
                setIsVisible={()=>setVisibleSection("details")}
                title={"InstaMart details"}
                description={"Swiggy has over 20 million monthly users and does 1.5 million orders a day as of June 2021. Its orders have grown 2.5 times, while revenue has grown 2.8 times from June 2020 to June 2021.Based on the insight that households order a limited subset of products every day, Swiggy Instamart promises to deliver your order within 45 minutes, from 7 am to 1 am.The marketplace business aggregated with local Kirana stores from where users could get grocery, fresh produce, essential products, and food items delivered through Swiggy’s delivery fleet.The company also has a slew of specialized services under its stores business such as meat and seafood, pet care, etc."}
            />
            {/* <About/>
             <Details/>
             <Team/>
             <Product/>
             <Career/> */}
        </div>
    )
}
export default Instamart;
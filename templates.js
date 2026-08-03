const posterTemplates = {

    template1: {
        name: "Tracklist Poster",

        elements: [
            {
                type:"text",
                text:"ARTIST NAME",
                x:250,
                y:40,
                size:40
            },

            {
                type:"text",
                text:"ALBUM TITLE",
                x:200,
                y:100,
                size:32
            },

            {
                type:"text",
                text:
`01 TRACK NAME
02 TRACK NAME
03 TRACK NAME
04 TRACK NAME
05 TRACK NAME
06 TRACK NAME
07 TRACK NAME`,
                x:80,
                y:350,
                size:22
            }
        ]
    },


    template2: {

        name:"Minimal Album",

        elements:[
            {
                type:"text",
                text:"ALBUM",
                x:250,
                y:80,
                size:60
            },

            {
                type:"text",
                text:"ARTIST",
                x:270,
                y:160,
                size:25
            }
        ]

    },


    template3: {

        name:"Artist Focus",

        elements:[

            {
                type:"text",
                text:"ARTIST NAME",
                x:100,
                y:100,
                size:55
            },

            {
                type:"text",
                text:"ALBUM NAME",
                x:100,
                y:500,
                size:35
            }

        ]

    },


    template4: {

        name:"Classic Vinyl",

        elements:[

            {
                type:"text",
                text:"SIDE A",
                x:60,
                y:450,
                size:25
            },

            {
                type:"text",
                text:"SIDE B",
                x:400,
                y:450,
                size:25
            },

            {
                type:"text",
                text:"ALBUM TITLE",
                x:150,
                y:100,
                size:45
            }

        ]

    },


    template5: {

        name:"Tour Poster",

        elements:[

            {
                type:"text",
                text:"ARTIST WORLD TOUR",
                x:100,
                y:80,
                size:45
            },


            {
                type:"text",
                text:
`SYDNEY
MELBOURNE
BRISBANE
HOBART
PERTH`,
                x:120,
                y:300,
                size:30
            },


            {
                type:"text",
                text:"2026",
                x:260,
                y:520,
                size:60
            }

        ]

    }

};





function applyTemplate(number){

clearPoster();


let template =
posterTemplates["template"+number];


template.elements.forEach(element=>{


let el =
createElement(
element.type,
element.text || "",
element.x,
element.y
);



if(element.size){

el.style.fontSize =
element.size+"px";

}



});


}

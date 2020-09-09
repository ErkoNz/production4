export default function ZmenitTextTabulkaMesta(textPreZobrazenieObci, setTextPreZobrazenieObci, setShowHide, setSipkaObce) {
    if (textPreZobrazenieObci.boolean) {
        setTextPreZobrazenieObci({
            boolean: !textPreZobrazenieObci.boolean,
            text: "Schovať údaje o jedntlivých obciach"
        })
        setShowHide({
            maxHeight: '600px',
        })
        setSipkaObce({
            transform: "rotateX(180deg)",
            transition: 'all .2s ease-in',
            marginBottom: '-3px',
            marginLeft: '3px',
        })
    }
    else {
        setTextPreZobrazenieObci({
            boolean: !textPreZobrazenieObci.boolean,
            text: "Zobraziť údaje o jedntlivých obciach"
        })
        setShowHide({
            maxHeight: '0px',

        })
        setSipkaObce({
            transform: "rotateX(0deg)",
            transition: 'all .2s ease-in',
            marginBottom: '-3px',
            marginLeft: '3px',
        })
    }
}


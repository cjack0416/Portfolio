async function changeText()
{
    const fields = ["...Web/Mobile Dev", "...Game Dev", "...Robotics", "...System Software", "...AI"];
    var index = 0; 
    var startText = "";
    

    for (i = 0; i < fields[0].length; i++)
    {
        startText += fields[0][i];
        document.getElementById("header-3").innerHTML = startText;
        await sleep(130);
    }

    while (true)
    {
        var arr = fields[index];

        var currText = arr.split('.')[3];
        var newText = "";
        var id;

        if (index == fields.length - 1)
            id = 0;

        else
            id = index + 1;

        await sleep(5000);

        if (currText.length > fields[id].split('.')[3].length)
        {
            for (var i = 0; i < currText.length; i++)
            {
                rand = getRndInteger(33, 126);

                newText += String.fromCharCode(rand);
                document.getElementById("header-3").innerHTML = "..." + newText + currText.substring(i + 1, currText.length);
                await sleep(130);
            }
        }

        else
        {
            for (var i = 0; i < fields[id].split('.')[3].length; i++)
            {
                rand = getRndInteger(33, 126);

                newText += String.fromCharCode(rand);
                document.getElementById("header-3").innerHTML = "..." + newText + currText.substring(i + 1, currText.length);
                await sleep(130);
            }
        }

        var change = "";
        change = fields[id].substring(0, 3);
        var newID = 0;

        for (var i = 3; i < fields[id].length; i++)
        {
            change += fields[id][i];
            document.getElementById("header-3").innerHTML = change + newText.substring(newID + 1, newText.length);
            newID++;
            await sleep(130);
        }

        if (fields[id].length < newText.length)
        {
            for (var i = newID; i <= newText.length; i++)
            {
                let text = "";
                text = change;
                text += newText.substring(i, newText.length);
                document.getElementById("header-3").innerHTML = text;
                await sleep(130);
            }
        }

        else if (fields[id].length > newText.length)
        {
            for (var i = change.length; i < fields[id].length; i++)
            {
                change += fields[id][i];
                document.getElementById("header-3").innerHTML = change;
                await sleep(130);
            }
        }

        index++;

        if (index == fields.length)
            index = 0;
    }

}

function getRndInteger(min, max) 
{
    var ret = Math.floor(Math.random() * (max - min + 1) ) + min;;
    while (ret == 92)
        ret = Math.floor(Math.random() * (max - min + 1) ) + min;
    return ret;
}

function sleep(ms) 
{
    return new Promise(resolve => setTimeout(resolve, ms));
}
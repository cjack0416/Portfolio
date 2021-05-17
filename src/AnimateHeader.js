async function changeText()
{
    const fields = ["...Web/Mobile Dev", "...Game Dev", "...Robotics", "...System Software", "...AI"];
    var index = 0; 

    while (true)
    {
        var arr = fields[index];

        var currText = arr.split('.')[3];
        var newText = "";

        await sleep(5000);

        for (var i = 0; i < currText.length; i++)
        {
            rand = getRndInteger(33, 126);

            newText += String.fromCharCode(rand);
            document.getElementById("header-3").innerHTML = "..." + newText + currText.substring(i + 1, currText.length);
            await sleep(100);
        }

        var change = "";

        for (var i = 0; i < fields[index].length; i++)
        {
            change += fields[index][i];
            document.getElementById("header-3").innerHTML = change + newText.substring(i + 1, newText.length);
            await sleep(100);
        }

        if (fields[index].length < newText.length)
        {
            var j = 1;

            for (var i =  newText.length - fields[index].length + 1; i > 0; i--)
            {
                let text = "";
                text = "..." + change.substring(0, fields[index].length);

                for (var k = j; k > 0; k--)
                    text += " ";

                j++;
                text += change.substring(newText.length - i, newText.length);
                document.getElementById("header-3").innerHTML = text;
                await sleep(100);
            }
        }

        else if (fields[index].length > newText.length)
        {
            for (var i = change.length; i < fields[index].length; i++)
            {
                change += fields[index][i];
                document.getElementById("header-3").innerHTML = "..." + change;
                await sleep(100);
            }
        }

        index++;

        if (index == fields.length)
            index = 0;
    }

}

function getRndInteger(min, max) 
{
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function sleep(ms) 
{
    return new Promise(resolve => setTimeout(resolve, ms));
}
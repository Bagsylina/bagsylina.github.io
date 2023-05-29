function MazeGeneration(maze)
{
    let n = maze.length, m = maze[0].length;
    const mazetable = document.createElement("table");
    for(let i = 0; i < n; i++)
    {
        const mazerow = document.createElement("tr");
        for(let j = 0; j < m; j++)
        {
            const mazecell = document.createElement("td");
            if(maze[i][j] == -1)
                mazecell.innerHTML = '⬛';
            else if(maze[i][j] == 1)
                mazecell.innerHTML = '🍣';
            else
                mazecell.innerHTML = ' ';
            mazecell.classList.add("mazecell");
            mazerow.appendChild(mazecell);
        }
        mazetable.appendChild(mazerow);
    }
    document.getElementById("container").appendChild(mazetable);
}

function catshow(catpoz, sprite) 
{
    const mazetable = document.querySelector("table").getElementsByTagName("tr");
    const mazerow = mazetable[catpoz.x].getElementsByTagName("td");
    const mazecell = mazerow[catpoz.y];
    mazecell.innerHTML = sprite.innerHTML;
    mazecell.style.transform = getComputedStyle(sprite).transform;
}

function moveup(maze, catpoz, score, nr){
    const mazetable = document.querySelector("table").getElementsByTagName("tr");
    const mazerow = mazetable[catpoz.x].getElementsByTagName("td");
    const mazecell = mazerow[catpoz.y];
    if(catpoz.x > 0 && maze[catpoz.x - 1][catpoz.y] != -1)
    {
        catpoz.x -= 1;
        score -= 2;
        if(maze[catpoz.x][catpoz.y] == 1)
        {
            nr--;
            maze[catpoz.x][catpoz.y] = 0;
            score += 100;
        }
        document.querySelector(".score").innerHTML = "Score: " + score;
        mazecell.style.transform = 'scale(1, 1)';
        mazecell.innerHTML = '';
    }
    return [score, nr];
}

function movedown(maze, catpoz, score, nr){
    const mazetable = document.querySelector("table").getElementsByTagName("tr");
    const mazerow = mazetable[catpoz.x].getElementsByTagName("td");
    const mazecell = mazerow[catpoz.y];
    if(catpoz.x < maze.length - 1 && maze[catpoz.x + 1][catpoz.y] != -1)
    {
        catpoz.x += 1;
        score -= 2;
        if(maze[catpoz.x][catpoz.y] == 1)
        {
            nr--;
            maze[catpoz.x][catpoz.y] = 0;
            score += 100;
        }
        document.querySelector(".score").innerHTML = "Score: " + score;
        mazecell.style.transform = 'scale(1, 1)';
        mazecell.innerHTML = '';
    }
    return [score, nr];
}

function moveleft(maze, catpoz, sprite, score, nr)
{
    sprite.style.transform = 'scale(1, 1)';
    const mazetable = document.querySelector("table").getElementsByTagName("tr");
    const mazerow = mazetable[catpoz.x].getElementsByTagName("td");
    const mazecell = mazerow[catpoz.y];
    if(catpoz.y > 0 && maze[catpoz.x][catpoz.y - 1] != -1)
    {
        catpoz.y -= 1;
        score -= 2;
        if(maze[catpoz.x][catpoz.y] == 1)
        {
            nr--;
            maze[catpoz.x][catpoz.y] = 0;
            score += 100;
        }
        document.querySelector(".score").innerHTML = "Score: " + score;
        mazecell.style.transform = 'scale(1, 1)';
        mazecell.innerHTML = '';
    }
    return [score, nr];
}

function moveright(maze, catpoz, sprite, score, nr)
{
    sprite.style.transform = 'scale(-1, 1)';
    const mazetable = document.querySelector("table").getElementsByTagName("tr");
    const mazerow = mazetable[catpoz.x].getElementsByTagName("td");
    const mazecell = mazerow[catpoz.y];
    if(catpoz.y < maze[0].length - 1 && maze[catpoz.x][catpoz.y + 1] != -1)
    {
        catpoz.y += 1;
        score -= 2;
        if(maze[catpoz.x][catpoz.y] == 1)
        {
            nr--;
            maze[catpoz.x][catpoz.y] = 0;
            score += 100;
        }
        document.querySelector(".score").innerHTML = "Score: " + score;
        mazecell.style.transform = 'scale(1, 1)';
        mazecell.innerHTML = ' ';
    }
    return [score, nr];
}

window.onload = function(){
    var mazelist = [0, 0, 0];
    mazelist[0] = [[0, 0, 0, 0, 0, -1, 1, -1, 1, 0, 0], [1, -1, -1, -1, 0, 0, 0, -1, -1, -1, 0], [-1, -1, 0, 0, 0, -1, -1, -1, 0, 0, 0], [0, 0, 0, 0, -1, -1, 1, -1, 0, 0, 0], [0, -1, -1, 0, 0, 0, 0, -1, 0, -1, 0],
                [-1, -1, 0, 0, 0, -1, -1, -1, 0, -1, 0], [1, 0, 0, -1, -1, -1, -1, 0, 0, -1, 0], [-1, -1, 0, -1, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, -1, 0, -1, -1, -1, -1, -1, 0], [0, -1, -1, -1, 0, -1, 0, 0, 0, -1, 0],
                [0, 0, 0, 0, 0, -1, 1, -1, 0, 0, 0]];
    mazelist[1] = [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0], [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
                [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0], [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0],
                [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];
    mazelist[2] = [[0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 1], [0, -1, 0, -1, 0, -1, 0, -1, 0, 0, 0], [0, 0, 0, -1, 0, 0, 0, -1, -1, -1, -1], [0, -1, -1, -1, 0, -1, -1, -1, 1, -1, 1], [0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0],
                [0, -1, 0, -1, -1, -1, 0, -1, -1, -1, 0], [0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], [0, -1, 0, -1, -1, -1, -1, -1, -1, -1, -1],
                [1, -1, 0, 0, 0, 0, 0, 0, 0, 0, 1]];
    var sushi_nr = [6, 6, 6];
    var rand = Math.floor(Math.random() * 3);
    var maze = mazelist[rand];
    var score = 100;
    var nr = sushi_nr[rand];
    var action = 1;
    MazeGeneration(maze);
    var catpoz = {x: 0, y: 0};
    var sprite = document.createElement("td");
    sprite.classList.add("sprite");
    var htmlscore = document.createElement("td");
    htmlscore.classList.add('score');
    htmlscore.innerHTML = "Score: " + score;
    var htmltime = document.createElement("td");
    htmltime.classList.add('time');
    htmltime.innerHTML = "Time: 0";
    var time = 0;
    var Interval = setInterval(function() {time += 1; htmltime.innerHTML = "Time: " + time}, 1000);
    sprite.innerHTML = '🐈';
    sprite.style.transform = 'scale(-1, 1)';
    document.querySelector("main").appendChild(sprite);
    document.querySelector("main").appendChild(htmlscore);
    document.querySelector("main").appendChild(htmltime);
    catshow(catpoz, sprite);
    document.body.onkeydown = function(event){
        event.stopPropagation();
        event.preventDefault();
        if(action){
            switch(event.key){
                case "w": case "ArrowUp":
                    [score, nr] = moveup(maze, catpoz, score, nr);
                    catshow(catpoz, sprite);
                    break;
                case "s": case "ArrowDown":
                    [score, nr] = movedown(maze, catpoz, score, nr);
                    catshow(catpoz, sprite);
                    break;
                case "a": case "ArrowLeft":
                    [score, nr] = moveleft(maze, catpoz, sprite, score, nr);
                    catshow(catpoz, sprite);
                    break;
                case "d": case "ArrowRight": 
                    [score, nr] = moveright(maze, catpoz, sprite, score, nr);
                    catshow(catpoz, sprite);
                    break;
            }
            if(nr == 0)
            {
                const Timeout = setTimeout(function() {alert("Ai castigat!!!");}, 100);
                action = 0;
                clearInterval(Interval);
            }
            else if(score == 0)
            {
                const Timeout = setTimeout(function() {alert("Ai pierdut. :(");}, 100);
                action = 0;
                clearInterval(Interval);
            }
        }
        event.stopPropagation();
    }
}
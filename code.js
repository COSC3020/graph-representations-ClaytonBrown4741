function convertToAdjMatrix(adjList) {
	if (adjList==[])
		return [];
	var adjMatrix=[]
	for (var i=0; i < adjList.length; i++){
		adjMatrix[i] = [];
                for (var j=0; j < adjList.length; j++){
                        adjMatrix[i][j]=0;
                }
        }
	for (var i=0; i < adjList.length; i++){
		for (var j=0; j < adjList[i].length; j++){
			adjMatrix[i][adjList[i][j]]=1
		}
	}
	return adjMatrix;
}

function convertToAdjList(adjMatrix){
	//console.log(adjMatrix);
	if (adjMatrix==[])
                return [];
	//console.log(adjMatrix)
	var adjList=[];
	for (var i=0; i < adjMatrix.length; i++){
		adjList[i]=[];
		for (var j=0; j<adjMatrix.length; j++){
			if (adjMatrix[i][j]==1){
				adjList[i].push(j);
				//console.log(adjList);
			}
		}
	}
	return adjList;
}

//console.log(convertToAdjMatrix([[1],[2,3],[0,1],[0,1,2,3]]))
//console.log(convertToAdjList([[1,0,1],[1,1,1],[0,0,1]]))

function playersSolution(skills) {
    const participants  = skills.map((skills, index) => ({skills, index}))
    const results = Array(skills.length)

    while(participants.length > 1) {
        const nextRound = [];
        
        for(let i = 0; i < participants.length; i+=2) {
            const playerOne = participants[i]
            const playerTwo = participants[i+1]
            if(playerOne.skills > playerTwo.skills) {
                nextRound.push(playerOne);
                results[playerTwo.index] = results[playerOne.index] = Math.max(
                    results[playerOne.index] || 0, 
                    results[playerTwo.index] || 0) + 1;
            }
            else {
                nextRound.push(playerTwo);
                results[playerOne.index] = results[playerTwo.index] = Math.max(
                    results[playerOne.index] || 0,
                    results[playerTwo.index] || 0) + 1;
            }
        }
        participants.length = 0;
        participants.push(...nextRound);
    }
    return results;
}
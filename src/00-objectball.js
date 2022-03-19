function gameObject(){
    return {
        home: {
          teamName: "Brooklyn Nets",
          colors: ["black","white"],
          players:  {
             "jOSEPH": {
                  Number: " 32",
                  shoe: " pUMA",
                  points: " 3",
                 rebounds: " 2",
                 assists: " 0",
                 steals: " 0",
                 blocks: " 0",
                 slamdunks: " 3",
              }
          }
        },
        "Bill": {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise","Purple"],
            players:  {
                name: {
                    Name: "Joseph",
                    Number: "5",
                    shoe: "nike",
                    points: "32",
                    rebounds: "3",
                    assists: "24",
                    steals: "3",
                    blocks: "4",
                    slamdunks: "2",
                }
            }
        }
    }
}

console.log(gameObject());
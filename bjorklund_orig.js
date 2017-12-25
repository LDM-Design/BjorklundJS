function bjork(steps, pulses) {
	
	steps = Math.round(steps);
	pulses = Math.round(pulses);
    
    var pat1 = [1];
    var pat2 = [0];
    var rem = steps - pulses;
    var comb = pulses;
    var a = new Array(comb);
    var b = new Array(rem);
    var new2 = [];
    var newcom = 0;
    
    for (var i = 0; i < comb; i++) {
        a[i] = pat1[0];
    }
    
    for (var t = 0; t < rem; t++) {
        b[t] = pat2[0];
    }
    
    do {
        
        if (rem > comb) {
            new2 = pat2.slice();
            rem = rem - comb;
        } else {
            
            new2 = pat1.slice();
            newcom = rem;
            rem = comb - rem;
            comb = newcom;
        }
        
        for (var g=0; g < pat2.length; g++) {
        pat1.push(pat2[g]);
        }
        
        pat2 = new2;
        
        a = [];
        b = [];
        
        for ( i = 0; i < comb; i++) {
            
            for (var u=0; u < pat1.length; u++) {
				
				a.push(pat1[u]); 
				
				}
        }
    
        for ( t = 0; t < rem; t++) {
            
            for ( u=0; u < pat2.length; u++) {
				
				b.push(pat2[u]); 
				
				}
           
        }
        
    
        
    } while (rem > 1);
    
	for (var l=0; l < b.length; l++) {
		
    a.push(b[l]); }

    outlet (0, a);
}



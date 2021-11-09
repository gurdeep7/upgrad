function runProgram(input) {
    input=input.trim().split("\n");
    var n=+input[0];
    var arr=input[1].trim().split(" ").map(Number);
    merge_sort(0,n-1);
    function merge_sort(l,h){
        if(l<h)
        {
            var mid=Math.floor((l+h)/2);
            merge_sort(l,mid);
            merge_sort(mid+1,h);
            merge(l,mid,h);
        }
    }
    function merge(l,mid,h)
    {
        for(var i=l;i<=h;i++)
        {
          for(var x=i+1;x<=h;x++)
        {
            if(arr[i]>arr[x])
            {
                var temp=arr[i];
                arr[i]=arr[x];
                arr[x]=temp;
            }
        }  
        }
        // for(var j=mid+1;j<=h;j++)
        // {
        //   for(var x=j+1;x<=h;x++)
        // {
        //     if(arr[j]>arr[x])
        //     {
        //         var temp=arr[j];
        //         arr[j]=arr[x];
        //         arr[x]=temp;
        //     }
        // }    
        // }
    }
    console.log(arr.join(" "));
  }
  if (process.env.USER === "Admin") {
    runProgram(`5
    3 5 0 9 8`);
  } else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
      read += input;
    });
    process.stdin.on("end", function () {
      read = read.replace(/\n$/, "");
      read = read.replace(/\n$/, "");
      runProgram(read);
    });
    process.on("SIGINT", function () {
      read = read.replace(/\n$/, "");
      runProgram(read);
      process.exit(0) ;
    });
  }
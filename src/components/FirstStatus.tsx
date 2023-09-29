export default function FirstStatus() {
  
    return (

            
     
                <div className="card-body ">
                <div className="flex flex-row gap-6">
                    <h2 className="card-title">Bounty</h2>
                    <h3 className="text-xl-1 ml-20 font-display font-normal text-white">
                    700 USDC
                    </h3>
                </div>
                <div className="flex flex-row gap-6">
                    <h2 className="card-title mb-8">Participants</h2>
                    <h2 className="text-xl-1 ml-24 font-display font-normal text-white">
                    8
                    </h2>
                </div>
                <h2 className="mr-2 mb-2 card-title">Submission period</h2>
                <p>12 Sep 2030 - 26 Sep 2030</p>
                <progress
                    className="progress w-56"
                    value="75"
                    max="150"
                ></progress>
                <p className="mb-4">14 days remaining</p>
                
               
                </div>
            


        );
    };  
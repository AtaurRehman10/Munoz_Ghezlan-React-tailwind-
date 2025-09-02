import React from "react";

const Timeline = () => {
  return (
    <div className="p-8  text-white min-h-screen">
      <div className="max-w-4xl flex ml-20">
        <div className="relative py-20 min-w-[50%] mt-[10%]">
          {/* Timeline container */}
          <div className="relative">
            {/* Main horizontal line with dots */}
            <div className="flex items-center">
              <div className="w-3 h-3 bg-gray-400 rounded-full z-10 "></div>
              <div className="flex-1 h-0.5 bg-gray-400"></div>
              <div className="w-3 h-3 bg-gray-400 rounded-full z-10 "></div>
              <div className="flex-1 h-0.5 bg-gray-400"></div>
              <div className="w-3 h-3 bg-gray-400 rounded-full z-10 "></div>
              <div className="flex-1 h-0.5 bg-gray-400"></div>
              <div className="w-3 h-3 bg-gray-400 rounded-full z-10 "></div>
              <div className="flex-1 h-0.5 bg-gray-400"></div>
            </div>

            {/* Labels */}
            <div className="relative">
              {/* Free Agreement Signed - Bottom Left */}
              <div className="absolute top-14 -left-10 text-center text-xs font-medium w-24">
                <div>Free Agreement</div>
                <div>Signed</div>
              </div>

              {/* Onboarding - Top Center Left */}
              <div className="absolute -top-16 left-[26.7%]  transform -translate-x-1/2 text-center text-xs font-medium">
                <div>Onboarding</div>
              </div>

              {/* Pending Credit Repair - Bottom Center Right */}
              <div className="absolute top-14 left-[51.7%] transform -translate-x-1/2 text-center text-xs font-medium w-24">
                <div>Pending Credit</div>
                <div>Repair</div>
              </div>

              {/* Pending LLC Formation - Top Right */}
              <div className="absolute -top-20 left-[65%] text-center text-xs font-medium w-24">
                <div>Pending LLC</div>
                <div>Formation</div>
              </div>
            </div>

            {/* Vertical connectors */}
            <div className="absolute left-0 top-2 w-0.5 h-12 bg-gray-400 transform translate-x-1.5"></div>
            <div className="absolute left-[26.7%] top-2 w-0.5 h-8 bg-gray-400 transform -translate-x-0.5 -translate-y-10"></div>
            <div className="absolute left-[51.7%] top-2 w-0.5 h-12 bg-gray-400 transform -translate-x-0.5"></div>
            <div className="absolute left-[77.5%] top-2 w-0.5 h-8 bg-gray-400 transform -translate-x-1.5 -translate-y-10"></div>
          </div>
        </div>

        <div className="h-[13.2rem] w-0.5 bg-gray-400 flex-shrink-0 mt-[5.3rem]"></div>

        <div className="min-w-[50%] ">
          <div className="relative py-20 min-w-[50%] mb-10">
            {/* Timeline container */}
            <div className="relative">
              {/* Main horizontal line with dots */}
              <div className="flex items-center">
                <div className="flex-1 h-0.5 bg-gray-400"></div>
                <div className="flex-1 h-0.5 bg-gray-400"></div>
                <div className="w-3 h-3 bg-gray-400 rounded-full z-10 "></div>
                <div className="flex-1 h-0.5 bg-gray-400"></div>
                <div className="w-3 h-3 bg-gray-400 rounded-full z-10 "></div>
                <div className="flex-1 h-0.5 bg-gray-400"></div>
                <div className="w-3 h-3 bg-gray-400 rounded-full z-10 "></div>
              </div>

              {/* Labels */}
              <div className="relative">
                {/* Free Agreement Signed - Bottom Left */}
                <div className="absolute -top-20 -left-14 text-center text-xs font-medium w-24">
                  <div>Ready for</div>
                  <div>Funding</div>
                </div>

                {/* Onboarding - Top Center Left */}
                <div className="absolute -top-20 left-[47.5%]  transform -translate-x-1/2 text-center text-xs font-medium">
                  <div>Application</div>
                  <div>Submitted</div>
                </div>

                {/* Pending Credit Repair - Bottom Center Right */}
                <div className="absolute top-14 left-[73%] transform -translate-x-1/2 text-center text-xs font-medium w-24">
                  <div>Pending Approvals</div>
                </div>

                {/* Pending LLC Formation - Top Right */}
                <div className="absolute -top-20 -right-10 text-center text-xs font-medium w-24">
                  <div>Need to be Finalized</div>
                </div>
              </div>

              {/* Vertical connectors */}

              <div className="absolute left-[47.5%] top-2 w-0.5 h-8 bg-gray-400 transform -translate-x-0.5 -translate-y-10"></div>
              <div className="absolute left-[73%] top-2 w-0.5 h-12 bg-gray-400 transform -translate-x-0.5"></div>
              <div className="absolute right-0 top-2 w-0.5 h-8 bg-gray-400 transform -translate-x-1.5 -translate-y-10"></div>
            </div>
          </div>

          <div className="relative py-20 min-w-[50%]">
            {/* Timeline container */}
            <div className="relative">
              {/* Main horizontal line with dots */}
              <div className="flex items-center">
                <div className="flex-1 h-0.5 bg-gray-400"></div>
                <div className="w-3 h-3 bg-gray-400 rounded-full z-10 "></div>
                <div className="flex-1 h-0.5 bg-gray-400"></div>
                <div className="w-3 h-3 bg-gray-400 rounded-full z-10 "></div>
                <div className="flex-1 h-0.5 bg-gray-400"></div>
                <div className="w-3 h-3 bg-gray-400 rounded-full z-10 "></div>
                <div className="flex-1 h-0.5 bg-gray-400"></div>
                <div className="w-3 h-3 bg-gray-400 rounded-full z-10 "></div>
              </div>

              {/* Labels */}
              <div className="relative">
                {/* Free Agreement Signed - Bottom Left */}
                <div className="absolute top-5 -left-14 text-center text-xs font-medium w-24">
                  <div>Ready for </div>
                  <div>Bussiness Funding</div>
                </div>
                <div className="absolute top-14 left-[13%] text-center text-xs font-medium w-24">
                  <div>Business Bank</div>
                  <div>Account Required</div>
                </div>

                {/* Onboarding - Top Center Left */}
                <div className="absolute -top-16 left-[47.5%]  transform -translate-x-1/2 text-center text-xs font-medium">
                  <div>Need to Deposit</div>
                </div>

                {/* Pending Credit Repair - Bottom Center Right */}
                <div className="absolute top-14 left-[73%] transform -translate-x-1/2 text-center text-xs font-medium w-24">
                  <div>Pending Credit</div>
                  <div>Repair</div>
                </div>

                {/* Pending LLC Formation - Top Right */}
                <div className="absolute -top-20 -right-10 text-center text-xs font-medium w-24">
                  <div>Application Submitted</div>
                </div>
              </div>

              {/* Vertical connectors */}
              <div className="absolute left-[22%] top-2 w-0.5 h-12 bg-gray-400 transform translate-x-1.5"></div>
              <div className="absolute left-[48.5%] top-3 w-0.5 h-8 bg-gray-400 transform -translate-x-0.5 -translate-y-10"></div>
              <div className="absolute left-[74%] top-2 w-0.5 h-12 bg-gray-400 transform -translate-x-0.5"></div>
              <div className="absolute right-0 top-3 w-0.5 h-8 bg-gray-400 transform -translate-x-1.5 -translate-y-10"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
export { Timeline };

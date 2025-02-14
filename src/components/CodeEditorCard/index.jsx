import React from "react";
import {
  AccountIcon,
  FolderIcon,
  SearchIcon,
  SourceControlIcon,
} from "../../assets";

const CodeEditorUI = ({
  bgToolbar = "#F8F5F5",
  width = "w-[305px] md:w-[500px]",
  hasSkeleton = false,
}) => {
  return (
    <div className="flex items-center justify-center relative w-full">
      {/* Main Container */}
      <div
        className={`bg-white shadow-[0px_4px_57px_0px_rgba(0,0,0,0.15)] rounded-[6px] md:rounded-[12px] flex py-4 px-[14px] md:py-8 md:px-6 ${width}`}
      >
        {/* Sidebar */}
        <div
          className={`rounded-[3px] flex flex-col items-center py-3 px-2 md:py-6 md:px-4 space-y-1 md:space-y-2`}
          style={{ backgroundColor: bgToolbar }}
        >
          <img
            className="w-[14px] h-[14px] min-w-[14px] min-h-[14px] md:w-[25px] md:h-[25px]"
            src={FolderIcon}
            alt=""
          />
          <img
            className="w-[14px] h-[14px] md:w-[25px] md:h-[25px]"
            src={SearchIcon}
            alt=""
          />
          <img
            className="w-[14px] h-[14px] md:w-[25px] md:h-[25px]"
            src={SourceControlIcon}
            alt=""
          />
          <img
            className="w-[14px] h-[14px] md:w-[25px] md:h-[25px] mt-auto"
            src={AccountIcon}
            alt=""
          />
        </div>

        {/* Code Editor Panel */}
        <div className="pl-[20px] md:pl-[44px] text-sm font-mono">
          <pre className="text-[8px] md:text-sm">
            <code>
              <span className="text-pink-500">public function</span> index(){" "}
              {"{"}
              {"\n"} &nbsp; $this-&gt;load-&gt;model(
              <span className="text-blue-500">'feedback'</span>);
              {"\n"} &nbsp; $data['feedbacks'] = $this-&gt;fee;
              {"\n"} &nbsp; if(count ($data[
              <span className="text-blue-500">'feedbacks'</span>])) {"{"}
              {"\n"} &nbsp;&nbsp;&nbsp; $this-&gt;load-&gt;view(
              <span className="text-blue-500">'admin/feedback'</span>);
              {"\n"} &nbsp; {"}"} else {"{"}
              {"\n"} &nbsp;&nbsp;&nbsp; t{"\n"} &nbsp; {"}"}
              {"\n"}
              <span className="text-[#F083C3]">
                // you can change the new variable
              </span>
              {"\n"}
              <span className="text-[#F083C3]">
                // Controller Feedback pada method
              </span>
              {"\n"} $this-&gt;load-&gt;view(
              <span className="text-blue-500">'admin/feedback'</span>);
            </code>
            {hasSkeleton && (
              <div className="w-full h-full flex flex-col mt-[7px] md:mt-[14px] space-y-[3px] md:space-y-2 bg-white">
                <div className="h-[13px] md:h-6 bg-[#E4E4E4] rounded-[41px] w-3/4 animate-pulse"></div>
                <div className="h-[13px] md:h-6 bg-[#E4E4E4] rounded-[41px] w-2/4 animate-pulse"></div>
                <div className="h-[13px] md:h-6 bg-[#E4E4E4] rounded-[41px] w-full animate-pulse"></div>
              </div>
            )}
          </pre>
        </div>
      </div>
    </div>
  );
};

export default CodeEditorUI;

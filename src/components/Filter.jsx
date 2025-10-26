import React from 'react'
import './Filter.css'

export default function Filter({handleCollegeChange,handleBranchChange,handlePlatformChange }) {
  return (
    <div className='Filterrr'>
        <div className="Branch">
            <h1>Branch</h1>
            <div className="CSE">
                <input type="checkbox" value="cse" id="" onClick={handleBranchChange} />CSE
            </div>
            <div className="AIML">
                <input type="checkbox" value="aiml" id="" onClick={handleBranchChange} />AIML
            </div>
            <div className="IT">
                <input type="checkbox" value="it" id="" onClick={handleBranchChange} />IT
            </div>
            <div className="DS">
                <input type="checkbox" value="ds" id="" onClick={handleBranchChange} />DS
            </div>
        </div>
        <div className="Coding_PLatform">
            <h1>Platform</h1>
            <div className="Leetcode">
                <input type="checkbox" value="leetcode" id="" onClick={handlePlatformChange} />Leetcode
            </div>
            <div className="CodeForces">
                <input type="checkbox" value="codeforces" id="" onClick={handlePlatformChange} />CodeForces
            </div>
            <div className="CodeChef">
                <input type="checkbox" value="codechef" id="" onClick={handlePlatformChange} />CodeChef
            </div>
            <div className="GFG">
                <input type="checkbox" value="gfg" id="" onClick={handlePlatformChange} />GFG
            </div>
            <div className="HackerRank">
                <input type="checkbox" value="hackerrank" id="" onClick={handlePlatformChange} />HackerRank
            </div>
        </div>
    </div>
  )
}
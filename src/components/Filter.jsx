import React from 'react'
import './Filter.css'

export default function Filter() {
  return (
    <div className='Filterrr'>
        <div className="Campus">
            <h1>Campus</h1>
            <div className="AEC">
                <input type="checkbox" name="" id="" /> AEC
            </div>
            <div className="ACET">
                <input type="checkbox" name="" id="" /> ACET
            </div>
            <div className="ACOE">
                <input type="checkbox" name="" id="" /> ACOE
            </div>
        </div>
        <div className="Branch">
            <h1>Branch</h1>
            <div className="CSE">
                <input type="checkbox" name="" id="" />CSE
            </div>
            <div className="AIML">
                <input type="checkbox" name="" id="" />AIML
            </div>
            <div className="IT">
                <input type="checkbox" name="" id="" />IT
            </div>
            <div className="DS">
                <input type="checkbox" name="" id="" />DS
            </div>
        </div>
        <div className="Coding_PLatform">
            <h1>Platform</h1>
            <div className="Leetcode">
                <input type="checkbox" name="" id="" />Leetcode
            </div>
            <div className="CodeForces">
                <input type="checkbox" name="" id="" />CodeForces
            </div>
            <div className="CodeChef">
                <input type="checkbox" name="" id="" />CodeChef
            </div>
            <div className="GFG">
                <input type="checkbox" name="" id="" />GFG
            </div>
            <div className="HackerRank">
                <input type="checkbox" name="" id="" />HackerRank
            </div>
        </div>
    </div>
  )
}

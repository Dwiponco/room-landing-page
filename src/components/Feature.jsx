import React from 'react'
import FeatureBox from './FeatureBox'
import featureImage from "../images/feature_1.png"
import featureImage2 from "../images/feature_2.png"
import featureImage3 from "../images/feature_3.png"

function Feature() {
    return (
        <div id="features">
            <div className="a-container">
                <FeatureBox
                    image={featureImage}
                    title="Development Course"
                />
                <FeatureBox
                    image={featureImage2}
                    title="Money Serving Serive"
                />
                <FeatureBox
                    image={featureImage3}
                    title="Usability Interface"
                />
            </div>
        </div>
    )
}

export default Feature

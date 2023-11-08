import Avatar from "boring-avatars"
import ExpandableText from "./ExpandableText"
import { useState } from "react"

export default function Reviews() {
  const [reviews, setReviews] = useState([
    {
      id: 1,
      avatar: {
        name: "Jean Kirschtein",
        variant: "marble",
        colors: ["#146A7C", "#F0AB3D", "#92A1C6", "#C271B4", "#C20D90"],
      },
      comment:
        "I recently enjoyed a cup of coffee at Sweet Sweet Kahawa, and it was an absolute treat. The Sweet Sweet Kahawa was perfectly balanced, with a rich, robust flavor and a hint of sweetness. The staff was friendly and knowledgeable, adding to the overall positive experience. I was impressed by the attention to detail, from the beautiful latte art to the well-crafted mugs. It was more than just coffee; it was a delightful experience. I can't wait to return and explore more of their offerings. If you love coffee, this place is a must-visit.",
    },
    {
      id: 2,
      avatar: {
        name: "Erwin Smith",
        variant: "marble",
        colors: ["#92A1C6", "#C271B4", "#C20D90", "#146A7C", "#F0AB3D"],
      },
      comment: "Very Tasty Coffee",
    },
    {
      id: 3,
      avatar: {
        name: "Sasha Braus",
        variant: "marble",
        colors: ["#264653", "#2a9d8f", "#e9c46a", "#f4a261", "#e76f51"],
      },
      comment:
        "I recently had the pleasure of savoring a cup of coffee at Sweet Sweet Kahawa, and it was an absolutely delightful experience. From the moment I stepped in, the cozy ambiance and the inviting aroma of freshly brewed coffee created the perfect setting. The barista's passion for their craft was evident in every sip of the coffee. I ordered a Sweet Sweet Kahawa and was treated to a perfectly balanced brew. The coffee had a rich, robust flavor with just the right hint of sweetness, making it a true delight for the taste buds. It was evident that the coffee beans had been carefully sourced and expertly roasted. The service was exceptional, and the staff was not only friendly but also knowledgeable about their coffee offerings. They took the time to explain the unique characteristics of the coffee I chose, making the experience all the more engaging. As I enjoyed my coffee, I couldn't help but appreciate the attention to detail that went into the entire presentation. From the beautiful latte art to the well-crafted mugs, every aspect of the coffee's presentation was aesthetically pleasing.",
    },
  ])

  return (
    <div>
      <div className='space-y-4'>
        <h1 className='text-2xl text-slate-800 font-semibold'>Reviews</h1>

        {reviews.map((review) => (
          <div key={review.id} className='flex gap-4'>
            <div className='mt-1'>
              <Avatar
                size={20}
                name={review.avatar.name}
                variant='marble'
                colors={review.avatar.colors}
              />
            </div>

            <div>
              <h2 className=' text-slate-700 font-medium'>{review.avatar.name}</h2>
              <ExpandableText maxCharacters={300}>{review.comment}</ExpandableText>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

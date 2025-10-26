import './QuestionCard.css'


interface QuestionData {
	id: string;
	text: string;
	choices: string[];
	answerIndex: number;
	difficulty?: 'easy' | 'medium' | 'hard';
}

function QuestionCard(question: QuestionData, onSelect: (choiceIndex: number) => void, disabled?: boolean) {
	
return (
	<>
	<div>

	</div>
	</>
)
}

export default QuestionCard
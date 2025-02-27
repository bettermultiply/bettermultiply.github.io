#include <string>
#include <vector>
#include <map>
#include <iostream>
using namespace::std;
class Solution {
public:
	int maxScoreWords(vector<string>& words, vector<char>& letters, vector<int>& score) {
		initCharNum(letters);
		initScoreWords(words, score);			        

		return dynamicCalculate(words, 0);

	}

	// calculate what combination can	    
	int dynamicCalculate(vector<string>& words, int index) {
		if(index >= this->wordsSize) {
			return 0;
		}

		bool flag = true;
		int getScore=0, skipScore=0;
		string word = words.at(index);
		skipScore = dynamicCalculate(words, index+1);
		
		for(char c: word) {
			if(--charNum[c] < 0) {
				flag = false;
			}
		}
		if(flag) {
			getScore = dynamicCalculate(words, index+1) + wordsScore.at(word);
		}

		for(char c: word) {
			++charNum[c];
		}
		
		return skipScore > getScore ? skipScore : getScore;
	}

	// calculate socre of every word and the number of Words.
	void initScoreWords(vector<string>& words, vector<int>& score) {
		int totalScore = 0;
		for(string s: words) {
			this->wordsSize++;
			for(char c: s) {
				totalScore += score.at(c-'a');
			}
			this->wordsScore[s] = totalScore;
			cout << totalScore << endl;
			totalScore = 0;
		}
	}

	// init number of charactors.
	void initCharNum(vector<char>& letter) {
		for(char l: letter) {
			this->charNum[l]++;
		}
	}
	


private:
	map<char, int> charNum;
	map<string, int> wordsScore;
	int wordsSize;
};

vector<string> w = {"g","cat","dad","good"};
vector<char> l = {'a','a','c','d','d','d','g','o','o'};
vector<int> s = {1,0,9,5,0,0,3,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0};



int main() {
	Solution* so = new Solution();
	int score = so->maxScoreWords(w, l, s);
	cout << score << endl;	
	return 0;
}
